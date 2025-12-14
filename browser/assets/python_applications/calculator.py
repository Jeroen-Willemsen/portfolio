import tkinter as tk
from tkinter import messagebox
import operator
import tkinter.font as tkfont

root = tk.Tk()

app_wdth = 650  # Slightly increased width
app_hght = 600  # Slightly increased height
scrn_wdth = root.winfo_screenwidth()
scrn_hght = root.winfo_screenheight()

x = (scrn_wdth / 2) - (app_wdth / 2)
y = (scrn_hght / 2) - (app_hght / 2)

root.title("Simple Calculator")
root.geometry(f"{app_wdth}x{app_hght}+{int(x)}+{int(y)}")
root.configure(bg='#86BEAF')

helv = tkfont.Font(family="Helvetica", size=10)

# Create a frame for the main calculator
main_frame = tk.Frame(root, bg='#86BEAF', highlightthickness=0, bd=0)
main_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)

entry_main = tk.Entry(main_frame, width=50, borderwidth=3, bd=5, justify="right")
entry_main.grid(row=0, column=0, columnspan=3, padx=10, pady=15)

entry_history = tk.Entry(main_frame, bg="#cfcfcf")
entry_history.grid(row=8, column=1, pady=10, ipadx=15, sticky="")

ops = {
    'addition': {'func': operator.add, 'symbol': '+'},
    'subtraction': {'func': operator.sub, 'symbol': '-'},
    'multiplication': {'func': operator.mul, 'symbol': '*'},
    'division': {'func': operator.truediv, 'symbol': '/'},
    'power': {'func': operator.pow, 'symbol': '**'},
    'percentage': {'func': lambda x, y: (x / y) * 100, 'symbol': '%'}
}

operation = None
first_num = None


def button_click(numeral):
    current = entry_main.get()
    entry_main.delete(0, tk.END)
    entry_main.insert(0, str(current) + str(numeral))


def button_clear():
    entry_main.delete(0, tk.END)
    entry_history.delete(0, tk.END)


def store_operation(op):
    global operation, first_num
    first_num_str = entry_main.get()
    if not first_num_str:
        messagebox.showerror("Error", "Please enter a number before selecting an operation.")
        return
    operation = op
    first_num = float(first_num_str)
    entry_main.delete(0, tk.END)


def button_equals():
    global operation, first_num
    if operation is None:
        messagebox.showerror("Error", "No operation selected.")
        return
    second_num_str = entry_main.get()
    if not second_num_str:
        messagebox.showerror("Error", "Please enter a second number before calculating.")
        return
    try:
        second_num = float(second_num_str)
    except ValueError:
        messagebox.showerror("Error", "Invalid number entered.")
        return
    entry_main.delete(0, tk.END)
    if operation in ops:
        func = ops[operation]['func']
        symbol = ops[operation]['symbol']
        try:
            result = func(first_num, second_num)
            entry_main.insert(0, result)
            entry_history.delete(0, tk.END)
            if operation == 'percentage':
                entry_history.insert(0, f"{first_num} is {result}% of {second_num}")
            else:
                entry_history.insert(0, f"{first_num}{symbol}{second_num}={result}")
        except ZeroDivisionError:
            messagebox.showerror("Error", "Cannot divide by zero.")
            entry_main.insert(0, first_num)
    else:
        messagebox.showerror("Error", "Invalid operation.")
    operation = None
    first_num = None


# Define button operations:
def button_add():
    store_operation('addition')


def button_subtract():
    store_operation('subtraction')


def button_multiply():
    store_operation('multiplication')


def button_divide():
    store_operation('division')


def button_power():
    store_operation('power')


def button_percent():
    store_operation('percentage')


# Define and place number buttons:
digits = [
    (7, 1, 0),
    (8, 1, 1),
    (9, 1, 2),
    (4, 2, 0),
    (5, 2, 1),
    (6, 2, 2),
    (1, 3, 0),
    (2, 3, 1),
    (3, 3, 2),
    (0, 4, 0)
]
for digit, row, col in digits:
    btn = tk.Button(main_frame, text=str(digit), bg="#dbefe1", height=3, width=20, bd=5, font=helv,
                    command=lambda d=digit: button_click(d))
    btn.grid(row=row, column=col, pady=2, sticky="nsew")

# Define and place operation buttons:
operators = [
    ('+', button_add, 4, 1),
    ('−', button_subtract, 4, 2),
    ('*', button_multiply, 5, 0),
    ('/', button_divide, 5, 1),
    ('**', button_power, 5, 2),
    ('%', button_percent, 6, 0),
    ('=', button_equals, 6, 2),
    ('Clear', button_clear, 6, 1)
]

for text, cmd, r, c in operators:
    op_btn = tk.Button(main_frame, text=text, bg="#dbefe1" if text not in ['=', 'Clear'] else "#b6d4bf",
                       height=3, width=20, bd=5, font=helv, command=cmd)
    op_btn.grid(row=r, column=c, pady=2, sticky="nsew")

main_frame.grid_columnconfigure((0, 1, 2), weight=1)


def openwindow():
    top = tk.Toplevel()
    top.title("Converter")
    # Remove fixed geometry to avoid leftover space under the converter
    top.resizable(False, False)
    top.configure(bg='#86BEAF', highlightthickness=0, bd=0)

    # Create a frame inside the converter dialog to manage content and remove any borders
    converter_frame = tk.Frame(top, bg='#86BEAF', highlightthickness=0, bd=0)
    converter_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)

    # Create entries for conversions:
    conversion_entries = [None]  # Index start from 1
    for i in range(1, 7):
        entry_conv = tk.Entry(converter_frame, width=20, borderwidth=3)
        entry_conv.grid(row=i, column=1, padx=10, pady=20)
        conversion_entries.append(entry_conv)

    # Define conversion functions:
    def clearfields():
        for e in conversion_entries[1:]:
            e.delete(0, tk.END)
        output_entry.delete(0, tk.END)

    def convert_kg_to_lb():
        get = conversion_entries[1].get()
        if not get:
            messagebox.showerror("Error", "Please enter a weight in kg.")
            return
        try:
            num = float(get)
        except ValueError:
            messagebox.showerror("Error", "Invalid input.")
            return
        conv = num * 2.205
        conversion_entries[1].delete(0, tk.END)
        conversion_entries[1].insert(0, conv)
        output_entry.delete(0, tk.END)
        output_entry.insert(0, f"{num} kg is {conv} lb.")

    def convert_lb_to_kg():
        get = conversion_entries[2].get()
        if not get:
            messagebox.showerror("Error", "Please enter a weight in lb.")
            return
        try:
            num = float(get)
        except ValueError:
            messagebox.showerror("Error", "Invalid input.")
            return
        conv = num / 2.205
        conversion_entries[2].delete(0, tk.END)
        conversion_entries[2].insert(0, conv)
        output_entry.delete(0, tk.END)
        output_entry.insert(0, f"{num} lb is {conv} kg.")

    def convert_c_to_f():
        get = conversion_entries[3].get()
        if not get:
            messagebox.showerror("Error", "Please enter a temperature in Celsius.")
            return
        try:
            num = float(get)
        except ValueError:
            messagebox.showerror("Error", "Invalid input.")
            return
        conv = (num * 1.8) + 32
        conversion_entries[3].delete(0, tk.END)
        conversion_entries[3].insert(0, conv)
        output_entry.delete(0, tk.END)
        output_entry.insert(0, f"{num}° Celsius is {conv}° Fahrenheit.")

    def convert_f_to_c():
        get = conversion_entries[4].get()
        if not get:
            messagebox.showerror("Error", "Please enter a temperature in Fahrenheit.")
            return
        try:
            num = float(get)
        except ValueError:
            messagebox.showerror("Error", "Invalid input.")
            return
        conv = (num - 32) / 1.8
        conversion_entries[4].delete(0, tk.END)
        conversion_entries[4].insert(0, conv)
        output_entry.delete(0, tk.END)
        output_entry.insert(0, f"{num}° Fahrenheit is {conv}° Celsius.")

    def convert_in_to_cm():
        get = conversion_entries[5].get()
        if not get:
            messagebox.showerror("Error", "Please enter a length in inches.")
            return
        try:
            num = float(get)
        except ValueError:
            messagebox.showerror("Error", "Invalid input.")
            return
        conv = num * 2.54
        conversion_entries[5].delete(0, tk.END)
        conversion_entries[5].insert(0, conv)
        output_entry.delete(0, tk.END)
        output_entry.insert(0, f"{num} inches is {conv} cm.")

    def convert_cm_to_in():
        get = conversion_entries[6].get()
        if not get:
            messagebox.showerror("Error", "Please enter a length in cm.")
            return
        try:
            num = float(get)
        except ValueError:
            messagebox.showerror("Error", "Invalid input.")
            return
        conv = num / 2.54
        conversion_entries[6].delete(0, tk.END)
        conversion_entries[6].insert(0, conv)
        output_entry.delete(0, tk.END)
        output_entry.insert(0, f"{num} cm is {conv} inches.")

    # Define converter buttons:
    conversions = [
        ("Convert kg to lb", convert_kg_to_lb, 1),
        ("Convert lb to kg", convert_lb_to_kg, 2),
        ("Convert Celsius to Fahrenheit", convert_c_to_f, 3),
        ("Convert Fahrenheit to Celsius", convert_f_to_c, 4),
        ("Convert inches to cm", convert_in_to_cm, 5),
        ("Convert cm to inches", convert_cm_to_in, 6)
    ]

    for label_text, func, row_idx in conversions:
        button_conv = tk.Button(converter_frame, text=label_text, bg="#dbefe1", height=1, width=30, bd=5,
                                font=helv, command=func)
        button_conv.grid(row=row_idx, column=2, pady=2, padx=5)

    # Clear fields button:
    button_clearfield = tk.Button(converter_frame, text="Clear fields", bd=5, font=helv, command=clearfields)
    button_clearfield.grid(row=7, column=1, padx=5, pady=5, sticky='ew')

    # Output entry:
    output_entry = tk.Entry(converter_frame, width=40, borderwidth=3, bg="#cfcfcf")
    output_entry.grid(row=8, column=1, columnspan=2, padx=10, pady=20, sticky='ew')

    # Add a close button to close the converter dialog:
    close_converter_button = tk.Button(converter_frame, text="Close Converter", bd=5, font=helv, command=top.destroy)
    close_converter_button.grid(row=9, column=1, columnspan=2, padx=5, pady=10, sticky='ew')

    # Let the converter window size itself according to its content
    top.update_idletasks()
    top.minsize(converter_frame.winfo_reqwidth() + 20, converter_frame.winfo_reqheight() + 20)
    top.geometry(f"{converter_frame.winfo_reqwidth() + 20}x{converter_frame.winfo_reqheight() + 20}")


open_button = tk.Button(main_frame, text="Open the converter", bd=5, font=helv, command=openwindow)
open_button.grid(row=9, column=0, padx=5, pady=10, sticky='ew')

close_button = tk.Button(main_frame, text="Close the program", bd=5, font=helv, command=root.destroy)
close_button.grid(row=9, column=2, padx=5, pady=10, sticky='ew')

root.mainloop()
