#!/usr/bin/env python
# coding: utf-8

import tkinter as tk
import tkinter.font as tkfont
import requests
import json

class AutocompleteEntry(tk.Entry):
    def __init__(self, municipalities, on_select_callback, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.municipalities = sorted(municipalities, key=str.lower)
        self.var = self["textvariable"] = tk.StringVar()
        self.var.trace('w', self.on_change)
        self.bind("<Return>", self.on_selection)
        self.bind("<Up>", self.move_up)
        self.bind("<Down>", self.move_down)

        self.listbox = None
        self.on_select_callback = on_select_callback  # Callback function

    def on_change(self, *args):
        pattern = self.var.get().lower()
        if pattern == '':
            self.close_listbox()
            return

        suggestions = [municipality for municipality in self.municipalities if municipality.lower().startswith(pattern)]
        if suggestions:
            if not self.listbox:
                self.open_listbox()
            self.update_listbox(suggestions)
        else:
            self.close_listbox()

    def open_listbox(self):
        if self.listbox:
            return
        self.listbox = tk.Listbox(self.master, bg="#f0f0f0", bd=1, relief="solid", highlightthickness=0)
        self.listbox.bind("<Button-1>", self.on_selection)
        self.listbox.bind("<Return>", self.on_selection)
        self.listbox.place(x=self.winfo_x(), y=self.winfo_y() + self.winfo_height())
        self.listbox.lift()

    def update_listbox(self, suggestions):
        self.listbox.delete(0, tk.END)
        for suggestion in suggestions:
            self.listbox.insert(tk.END, suggestion)
        # Adjust the height of the listbox to the number of suggestions (max 6)
        height = min(len(suggestions), 6)
        self.listbox.configure(height=height)
        # Highlight the first item
        self.listbox.selection_set(0)

    def close_listbox(self):
        if self.listbox:
            self.listbox.destroy()
            self.listbox = None

    def on_selection(self, event):
        if self.listbox:
            selection = self.listbox.curselection()
            if selection:
                self.var.set(self.listbox.get(selection))
            self.close_listbox()
            if self.on_select_callback:
                self.on_select_callback()  # Call the callback function
        else:
            # If listbox is not open, treat Enter as submission
            if self.on_select_callback:
                self.on_select_callback()
        self.focus_set()
        return "break"

    def move_up(self, event):
        if self.listbox:
            index = self.listbox.curselection()
            if index:
                index = index[0]
                if index > 0:
                    self.listbox.selection_clear(first=index)
                    index -= 1
                    self.listbox.selection_set(first=index)
                    self.listbox.activate(index)
            return "break"

    def move_down(self, event):
        if self.listbox:
            index = self.listbox.curselection()
            if index:
                index = index[0]
                if index < self.listbox.size() - 1:
                    self.listbox.selection_clear(first=index)
                    index += 1
                    self.listbox.selection_set(first=index)
                    self.listbox.activate(index)
            else:
                self.listbox.selection_set(first=0)
                self.listbox.activate(0)
            return "break"

class WeatherApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Het weer in Nederland")
        self.root.configure(bg='#cfcfcf')

        # Configure window grid
        self.root.columnconfigure(0, weight=1, uniform='col')
        self.root.columnconfigure(1, weight=1, uniform='col')
        self.root.rowconfigure(1, weight=1)

        # Set the font
        self.helv = tkfont.Font(family="Helvetica", size=12)

        # List of municipalities
        self.municipalities = self.load_municipalities()

        # Create widgets
        self.create_widgets()

    def load_municipalities(self):
        # Full list of municipalities (shortened for brevity)
        return [
            'Aa en Hunze', 'Aalsmeer', 'Aalten', 'Achtkarspelen', 'Alblasserdam', 'Albrandswaard', 'Alkmaar', 
            'Almelo', 'Almere', 'Alphen aan den Rijn', 'Alphen-Chaam', 'Altena', 'Ameland', 'Amersfoort', 
            'Amstelveen', 'Amsterdam', 'Apeldoorn', 'Appingedam', 'Arnhem', 'Assen', 'Asten', 'Baarle-Nassau', 
            'Baarn', 'Barendrecht', 'Barneveld', 'Beek', 'Beekdaelen', 'Beemster', 'Beesel', 'Berg en Dal', 
            'Bergeijk', 'Bergen (L.)', 'Bergen (NH.)', 'Bergen op Zoom', 'Berkelland', 'Bernheze', 'Best', 
            'Beuningen', 'Beverwijk', 'Bladel', 'Blaricum', 'Bloemendaal', 'Bodegraven-Reeuwijk', 'Boekel', 
            'Borger-Odoorn', 'Borne', 'Borsele', 'Boxmeer', 'Boxtel', 'Breda', 'Brielle', 'Bronckhorst', 'Brummen', 
            'Brunssum', 'Bunnik', 'Bunschoten', 'Buren', 'Capelle aan den IJssel', 'Castricum', 'Coevorden', 
            'Cranendonck', 'Cuijk', 'Culemborg', 'Dalfsen', 'Dantumadiel', 'De Bilt', 'De Fryske Marren', 
            'De Ronde Venen', 'De Wolden', 'Delft', 'Delfzijl', 'Den Helder', 'Deurne', 'Deventer', 'Diemen', 
            'Dinkelland', 'Doesburg', 'Doetinchem', 'Dongen', 'Dordrecht', 'Drechterland', 'Drimmelen', 'Dronten', 
            'Druten', 'Duiven', 'Echt-Susteren', 'Edam-Volendam', 'Ede', 'Eemnes', 'Eersel', 'Eijsden-Margraten', 
            'Eindhoven', 'Elburg', 'Emmen', 'Enkhuizen', 'Enschede', 'Epe', 'Ermelo', 'Etten-Leur', 'Geertruidenberg', 
            'Geldrop-Mierlo', 'Gemert-Bakel', 'Gennep', 'Gilze en Rijen', 'Goeree-Overflakkee', 'Goes', 'Goirle',
            'Gooise Meren', 'Gorinchem', 'Gouda', 'Grave', 'Groningen', 'Gulpen-Wittem', 'Haaksbergen', 'Haaren', 
            'Haarlem', 'Haarlemmermeer', 'Halderberge', 'Hardenberg', 'Harderwijk', 'Hardinxveld-Giessendam', 
            'Harlingen', 'Hattem', 'Heemskerk', 'Heemstede', 'Heerde', 'Heerenveen', 'Heerhugowaard', 'Heerlen', 
            'Heeze-Leende', 'Heiloo', 'Hellendoorn', 'Hellevoetsluis', 'Helmond', 'Hendrik-Ido-Ambacht', 'Hengelo', 
            'Het Hogeland', 'Heumen', 'Heusden', 'Hillegom', 'Hilvarenbeek', 'Hilversum', 'Hoeksche Waard', 
            'Hof van Twente', 'Hollands Kroon', 'Hoogeveen', 'Hoorn', 'Horst aan de Maas', 'Houten', 'Huizen', 
            'Hulst', 'IJsselstein', 'Kaag en Braassem', 'Kampen', 'Kapelle', 'Katwijk', 'Kerkrade', 'Koggenland', 
            'Krimpen aan den IJssel', 'Krimpenerwaard', 'Laarbeek', 'Landerd', 'Landgraaf', 'Landsmeer', 'Langedijk', 
            'Lansingerland', 'Laren', 'Leeuwarden', 'Leiden', 'Leiderdorp', 'Leidschendam-Voorburg', 'Lelystad', 
            'Leudal', 'Leusden', 'Lingewaard', 'Lisse', 'Lochem', 'Loon op Zand', 'Lopik', 'Loppersum', 'Losser', 
            'Maasdriel', 'Maasgouw', 'Maassluis', 'Maastricht', 'Medemblik', 'Meerssen', 'Meierijstad', 'Meppel', 
            'Middelburg', 'Midden-Delfland', 'Midden-Drenthe', 'Midden-Groningen', 'Mill en Sint Hubert', 'Moerdijk', 
            'Molenlanden', 'Montferland', 'Montfoort', 'Mook en Middelaar', 'Neder-Betuwe', 'Nederweert', 'Nieuwegein', 
            'Nieuwkoop', 'Nijkerk', 'Nijmegen', 'Nissewaard', 'Noardeast-Fryslân', 'Noord-Beveland', 'Noordenveld', 
            'Noordoostpolder', 'Noordwijk', 'Nuenen', 'Nunspeet', 'Oegstgeest', 'Oirschot', 'Oisterwijk', 'Oldambt', 
            'Oldebroek', 'Oldenzaal', 'Olst-Wijhe', 'Ommen', 'Oost Gelre', 'Oosterhout', 'Ooststellingwerf', 'Oostzaan', 
            'Opmeer', 'Opsterland', 'Oss', 'Oude IJsselstreek', 'Ouder-Amstel', 'Oudewater', 'Overbetuwe', 'Papendrecht', 
            'Peel en Maas', 'Pekela', 'Pijnacker-Nootdorp', 'Purmerend', 'Putten', 'Raalte', 'Reimerswaal', 'Renkum', 
            'Renswoude', 'Reusel-De Mierden', 'Rheden', 'Rhenen', 'Ridderkerk', 'Rijssen-Holten', 'Rijswijk', 'Roerdalen', 
            'Roermond', 'Roosendaal', 'Rotterdam', 'Rozendaal', 'Rucphen', 'Schagen', 'Scherpenzeel', 'Schiedam', 
            'Schiermonnikoog', 'Schouwen-Duiveland', 'Simpelveld', 'Sint Anthonis', 'Sint-Michielsgestel', 'Sittard-Geleen', 
            'Sliedrecht', 'Sluis', 'Smallingerland', 'Soest', 'Someren', 'Son en Breugel', 'Stadskanaal', 'Staphorst', 
            'Stede Broec', 'Steenbergen', 'Steenwijkerland', 'Stein', 'Stichtse Vecht', 'Súdwest-Fryslân', 'Terneuzen', 
            'Terschelling', 'Texel', 'Teylingen', 'Tholen', 'Tiel', 'Tilburg', 'Tubbergen', 'Twenterand', 'Tynaarlo', 
            'Tytsjerksteradiel', 'Uden', 'Uitgeest', 'Uithoorn', 'Urk', 'Utrecht', 'Utrechtse Heuvelrug', 'Vaals', 
            'Valkenburg aan de Geul', 'Valkenswaard', 'Veendam', 'Veenendaal', 'Veere', 'Veldhoven', 'Velsen', 'Venlo', 
            'Venray', 'Vijfheerenlanden', 'Vlaardingen', 'Vlieland', 'Vlissingen', 'Voerendaal', 'Voorschoten', 'Voorst', 
            'Vught', 'Waadhoeke', 'Waalre', 'Waalwijk', 'Waddinxveen', 'Wageningen', 'Wassenaar', 'Waterland', 'Weert', 
            'Weesp', 'West Betuwe', 'West Maas en Waal', 'Westerkwartier', 'Westerveld', 'Westervoort', 'Westerwolde', 
            'Westland', 'Weststellingwerf', 'Westvoorne', 'Wierden', 'Wijchen', 'Wijdemeren', 'Wijk bij Duurstede', 
            'Winterswijk', 'Woensdrecht', 'Woerden', 'Wormerland', 'Woudenberg', 'Zaanstad', 'Zaltbommel', 'Zandvoort', 
            'Zeewolde', 'Zeist', 'Zevenaar', 'Zoetermeer', 'Zoeterwoude', 'Zuidplas', 'Zundert', 'Zutphen', 'Zwartewaterland', 
            'Zwijndrecht', 'Zwolle'
        ]

    def create_widgets(self):
        # Autocomplete Entry for location input with callback
        self.loc_e = AutocompleteEntry(
            self.municipalities,
            on_select_callback=self.on_municipality_selected,
            master=self.root,
            font=self.helv
        )
        self.loc_e.grid(row=0, column=0, columnspan=2, padx=5, pady=5, sticky="nsew")

        # Text widget for displaying weather information
        self.ans_e = tk.Text(self.root, bg="#f0f0f0", relief=tk.SUNKEN, font=self.helv)
        self.ans_e.grid(row=1, column=0, columnspan=2, sticky="nsew")

        # Button to trigger weather lookup
        self.loc_btn = tk.Button(self.root, text="Vind het weer voor deze gemeente", command=self.loc_lookup)
        self.loc_btn.grid(row=2, column=0, padx=5, pady=5, sticky="nsew")

        # Button to clear fields
        self.clr_btn = tk.Button(self.root, text="Maak de velden leeg", command=self.clear_fields)
        self.clr_btn.grid(row=2, column=1, padx=5, pady=5, sticky="nsew")

        # Bind the Return key to the lookup function
        self.root.bind('<Return>', self.loc_lookup)

    def on_municipality_selected(self):
        # Clear the weather information text box and fetch new data
        self.ans_e.delete("1.0", tk.END)
        self.loc_lookup()

    def loc_lookup(self, event=None):
        self.ans_e.delete("1.0", tk.END)
        location = self.loc_e.get().strip()
        if not location:
            self.ans_e.insert(tk.END, "Voer een geldige gemeentenaam in.\n\n")
            return

        try:
            response = requests.get(
                "http://weerlive.nl/api/json-data-10min.php",
                params={'key': '025e2b1d6f', 'locatie': location}
            )
            response.raise_for_status()
            data = response.json()
        except requests.exceptions.HTTPError as e:
            self.ans_e.insert(tk.END, f"HTTP-fout: {e}\nControleer uw internetverbinding en probeer het opnieuw.\n")
            return
        except json.JSONDecodeError:
            self.ans_e.insert(tk.END, "Fout bij het verwerken van de gegevens. Controleer of de API-sleutel correct is.\n")
            return
        except Exception as e:
            self.ans_e.insert(tk.END, f"Er is een onverwachte fout opgetreden: {e}\n")
            return

        if 'liveweer' not in data or not data['liveweer']:
            self.ans_e.insert(tk.END, f"Geen weergegevens gevonden voor '{location}'. Controleer de gemeentenaam en probeer het opnieuw.\n")
            return

        weather = data['liveweer'][0]
        text_today = (
            f"Momenteel is het in {weather.get('plaats', '')} {weather.get('temp', '')} graden.\n"
            f"Verwachting: {weather.get('verw', '')}\n"
        )
        text_temp_today = (
            f"Minimumtemperatuur: {weather.get('d0tmin', '')} graden.\n"
            f"Maximumtemperatuur: {weather.get('d0tmax', '')} graden.\n"
        )
        text_rain_today = (
            f"Kans op zon: {weather.get('d0zon', '')}%.\n"
            f"Kans op regen: {weather.get('d0neerslag', '')}%.\n"
        )

        self.ans_e.insert(tk.END, text_today + text_temp_today + text_rain_today)

    def clear_fields(self):
        self.ans_e.delete("1.0", tk.END)
        self.loc_e.delete(0, tk.END)
        self.loc_e.close_listbox()

if __name__ == "__main__":
    root = tk.Tk()
    app = WeatherApp(root)
    root.mainloop()
