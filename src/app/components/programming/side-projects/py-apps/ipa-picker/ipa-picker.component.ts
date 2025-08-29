import {Component} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ipa-picker',
  standalone: true,
  imports: [
    HighlightModule
  ],
  templateUrl: './ipa-picker.component.html',
  styleUrl: './ipa-picker.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in', style({opacity: 1}))
      ])
    ])
  ]
})
export class IpaPickerLatexConverterComponent {
  code: string =
    `
import tkinter as tk
from tkinter import *
import tkinter.font as tkfont

root = tk.Tk()

app_wdth = 1300
app_hght = 700
scrn_wdth = root.winfo_screenwidth()
scrn_hght = root.winfo_screenheight()
x = (scrn_wdth / 2) - (app_wdth / 2)
y = (scrn_hght / 2) - (app_hght / 2)

root.title("IPA Symbol Picker")
root.configure(bg="#ffffff")
root.geometry(f"{app_wdth}x{app_hght}+{int(x)}+{int(y)}")

tnr = tkfont.Font(family="Times New Roman", size=14)
tnr_l = tkfont.Font(family="Times New Roman", size=18)

px = tk.PhotoImage(width=1, height=1)

cns_frame = Frame(root)
cns_frame.grid(row=3, column=0, sticky="NESW")
cns_frame.configure(bg="#ffffff")

vow_frame = Frame(root)
vow_frame.grid(row=3, column=1, sticky="NESW")
vow_frame.configure(bg="#ffffff")

ton_frame = Frame(root)
ton_frame.grid(row=3, column=2, sticky="NESW")
ton_frame.configure(bg="#ffffff")

mod_frame = Frame(root)
mod_frame.grid(row=7, column=0, sticky="NESW")
mod_frame.configure(bg="#ffffff")

sup_frame = Frame(root)
sup_frame.grid(row=6, column=0, sticky="NESW")
sup_frame.configure(bg="#ffffff")

oth_frame = Frame(root)
oth_frame.grid(row=5, column=0, sticky="NESW")
oth_frame.configure(bg="#ffffff")

npu_frame = Frame(root)
npu_frame.grid(row=4, column=0, sticky="NESW")
npu_frame.configure(bg="#ffffff")

tra_frame = Frame(root)
tra_frame.grid(row=8, column=0, sticky="NESW")
tra_frame.configure(bg="#ffffff")

main_e = Text(root, borderwidth=1.5, height=5, width=50, relief=RIDGE)
main_e.grid(row=0, column=0, columnspan=3, padx=10, pady=5, sticky="NESW")
main_e["font"] = tnr

sym_lbl = Label(root, width=50, text=" ")
sym_lbl.grid(row=2, column=0, columnspan=3, sticky="NESW")
sym_lbl.configure(bg="#ffffff", fg="#727171")
sym_lbl["font"] = tnr

btn_frame = Label(root, width=50, text=" ")
btn_frame.grid(row=1, column=0, columnspan=3, sticky="NESW")
btn_frame.configure(bg="#ffffff", fg="#727171")
btn_frame["font"] = tnr

def enter(e):
    descr = getattr(e.widget, "description", "")
    sym_lbl["text"] = descr
    e.widget["bg"] = "#f4f1f1"

def leave(e):
    sym_lbl["text"] = " "
    e.widget["bg"] = "#ffffff"

def btn_click(sym):
    main_e.insert(INSERT, str(sym))

def clearfields():
    main_e.delete("1.0","end")

btn_fil = Button(btn_frame, text=" ", bg="#ffffff", image=px, height=15, width=20, compound="c", bd=0)
btn_fil.grid(row=0, column=0)

btn_clr = Button(btn_frame, text="\u00D7", fg="#000000", image=px, height=15, width=60, compound="c", bd=0, relief=RIDGE, command=clearfields)
btn_clr.grid(row=0, column=1)
btn_clr["font"] = tnr
btn_clr.configure(bg="#ffffff")

def space():
    main_e.insert("end", "\u202F")

btn_spc = Button(btn_frame, text="SPACE", fg="#000000", image=px, height=15, width=60, compound="c", bd=0, relief=RIDGE, command=space)
btn_spc.grid(row=0, column=2)
btn_spc["font"] = tnr
btn_spc.configure(bg="#ffffff")

def nbsp():
    main_e.insert("end", "\u2007")

btn_nbs = Button(btn_frame, text="NBSP", fg="#000000", image=px, height=15, width=60, compound="c", bd=0, relief=RIDGE, command=nbsp)
btn_nbs.grid(row=0, column=3)
btn_nbs["font"] = tnr
btn_nbs.configure(bg="#ffffff")

def lnbr():
    main_e.insert("end", "\\n")

btn_lnb = Button(btn_frame, text="\u21B5", fg="#000000", image=px, height=15, width=60, compound="c", bd=0, relief=RIDGE, command=lnbr)
btn_lnb.grid(row=0, column=4)
btn_lnb["font"] = tnr
btn_lnb.configure(bg="#ffffff")

def tab():
    main_e.insert("end", "\u0009")

btn_tab = Button(btn_frame, text="\u21E5", fg="#000000", image=px, height=15, width=60, compound="c", bd=0, relief=RIDGE, command=tab)
btn_tab.grid(row=0, column=5)
btn_tab["font"] = tnr
btn_tab.configure(bg="#ffffff")

def convert():
    dic = btn_dic = {
 " "  : " ",
 "\\n" : "\\n",
 "\u007C" : r"\\textipa{\\textvertline}",
 "\u2016" : r"\\textipa{\\textdoublevertline}",
 "\u203F" : r"\\textipa{\\textbottomtiebar}",
 "\u0069" : r"\\textipa{i}",
 "\u0079" : r"\\textipa{y}",
 "\u0268" : r"\\textipa{\\textbari}",
 "\u0289" : r"\\textipa{\\textbaru}",
 "\u026F" : r"\\textipa{\\textturnm}",
 "\u0075" : r"\\textipa{u}",
 "\u026A" : r"\\textipa{\\textsci}",
 "\u028F" : r"\\textipa{\\textscy}",
 "\u028A" : r"\\textipa{\\textupsilon}",
 "\u0065" : r"\\textipa{e}",
 "\u00F8" : r"\\textipa{\\o}",
 "\u0258" : r"\\textipa{\\textreve}",
 "\u0275" : r"\\textipa{\\textbaro}",
 "\u0264" : r"\\textipa{\\textramshorns}",
 "\u006F" : r"\\textipa{o}",
 "\u0259" : r"\\textipa{\\textschwa}",
 "\u025B" : r"\\textipa{\\textepsilon}",
 "\u0153" : r"\\textipa{\\oe}",
 "\u025C" : r"\\textipa{\\textrevepsilon}",
 "\u025E" : r"\\textipa{\\textcloserevepsilon}",
 "\u028C" : r"\\textipa{\\textturnv}",
 "\u0254" : r"\\textipa{\\textopeno}",
 "\u00E6" : r"\\textipa{ae}",
 "\u0250" : r"\\textipa{\\textturna}",
 "\u0061" : r"\\textipa{a}",
 "\u0276" : r"\\textipa{\\textscoelig}",
 "\u0251" : r"\\textipa{\\textscripta}",
 "\u0252" : r"\\textipa{\\textinvscripta}",
 "\u2193" : r"\\textipa{\\textdownfullarrow}",
 "\u2191" : r"\\textipa{\\textupfullarrow}",
 "\u02E5" : r"\\textipa{\\tone{55}}",
 "\u02E6" : r"\\textipa{\\tone{44}}",
 "\u02E7" : r"\\textipa{\\tone{33}}",
 "\u02E8" : r"\\textipa{\\tone{22}}",
 "\u02E9" : r"\\textipa{\\tone{11}}",
 "\u02E9\u02E5" : r"\\textipa{\\tone{15}}",
 "\u02E5\u02E9" : r"\\textipa{\\tone{51}}",
 "\u02E6\u02E5" : r"\\textipa{\\tone{45}}",
 "\u02E9\u02E8" : r"\\textipa{\\tone{12}}",
 "\u02E7\u02E6\u02E7" : r"\\textipa{\\tone{454}}",
 "\u0070" : r"\\textipa{p}",
 "\u0062" : r"\\textipa{b}",
 "\u0074" : r"\\textipa{t}",
 "\u0064" : r"\\textipa{d}",
 "\u0288" : r"\\textipa{\\textrtailt}",
 "\u0256" : r"\\textipa{\\textrtaild}",
 "\u0063" : r"\\textipa{c}",
 "\u025F" : r"\\textipa{\\textbardotlessj}",
 "\u006B" : r"\\textipa{k}",
 "\u0261" : r"\\textipa{\\textscriptg}",
 "\u0071" : r"\\textipa{q}",
 "\u0262" : r"\\textipa{\\textscg}",
 "\u0294" : r"\\textipa{\\textglotstop}",
 "\u006D" : r"\\textipa{m}",
 "\u0271" : r"\\textipa{\\textltailm}",
 "\u006E" : r"\\textipa{n}",
 "\u0273" : r"\\textipa{\\textrtailn}",
 "\u0272" : r"\\textipa{\\textltailn}",
 "\u014B" : r"\\textipa{\\ng}",
 "\u0274" : r"\\textipa{\\textscn}",
 "\u0299" : r"\\textipa{\\textscb}",
 "\u0072" : r"\\textipa{r}",
 "\u0280" : r"\\textipa{\\textscr}",
 "\u2C71" : r"\\textipa{v}",
 "\u027D" : r"\\textipa{\\textrtailr}",
 "\u027E" : r"\\textipa{\\textfishhookr}",
 "\u0278" : r"\\textipa{\\textphi}",
 "\u03B2" : r"\\textipa{\\textbeta}",
 "\u0066" : r"\\textipa{f}",
 "\u0076" : r"\\textipa{v}",
 "\u03B8" : r"\\textipa{\\texttheta}",
 "\u00F0" : r"\\textipa{\\dh}",
 "\u0073" : r"\\textipa{s}",
 "\u007A" : r"\\textipa{z}",
 "\u0283" : r"\\textipa{\\textesh}",
 "\u0292" : r"\\textipa{\\textyogh}",
 "\u0282" : r"\\textipa{\\textrtails}",
 "\u0290" : r"\\textipa{\\textrtailz}",
 "\u00E7" : r"\\textipa{\\c{c}}",
 "\u029D" : r"\\textipa{\\textctj}",
 "\u0078" : r"\\textipa{x}",
 "\u0263" : r"\\textipa{\\textgamma}",
 "\u03C7" : r"\\textipa{\\textchi}",
 "\u0281" : r"\\textipa{\\textrevscr}",
 "\u0127" : r"\\textipa{\\textcrh}",
 "\u0295" : r"\\textipa{\\textrevglotstop}",
 "\u0068" : r"\\textipa{h}",
 "\u0266" : r"\\textipa{\\texththeng}",
 "\u028B" : r"\\textipa{\\textscriptv}",
 "\u0279" : r"\\textipa{\\textturnr}",
 "\u027B" : r"\\textipa{\\textturnrrtail}",
 "\u006A" : r"\\textipa{j}",
 "\u0270" : r"\\textipa{\\textturnmrleg}",
 "\u006C" : r"\\textipa{l}",
 "\u026D" : r"\\textipa{\\textrtaill}",
 "\u028E" : r"\\textipa{\\textturny}",
 "\u029F" : r"\\textipa{\\textscl}",
 "\u0298" : r"\\textipa{\\textbullseye}",
 "\u01C0" : r"\\textipa{\\textpipevar}",
 "\u01C3" : r"\\textipa{ǃ}",
 "\u01C1" : r"\\textipa{\\textdoublepipevar}",
 "\u01C2" : r"\\textipa{\\textdoublebarpipevar}",
 "\u0253" : r"\\textipa{\\texthtb}",
 "\u0257" : r"\\textipa{\\texthtd}",
 "\u0284" : r"\\textipa{\\texthtbardotlessj}",
 "\u0260" : r"\\textipa{\\texthtg}",
 "\u029B" : r"\\textipa{\\texthtscg}",
 "\u01A5" : r"\\textipa{\\texthtp}",
 "\u01AD" : r"\\textipa{\\texthtt}",
 "\u0188" : r"\\textipa{\\texthtc}",
 "\u0199" : r"\\textipa{\\texthtk}",
 "\u02A0" : r"\\textipa{\\texthtq}",
 "\u028D" : r"\\textipa{\\textturnw}",
 "\u0077" : r"\\textipa{w}",
 "\u0265" : r"\\textipa{\\textturnh}",
 "\u029C" : r"\\textipa{\\textsch}",
 "\u02A2" : r"\\textipa{\\textbarrevglotstop}",
 "\u02A1" : r"\\textipa{\\textbarglotstop}",
 "\u0255" : r"\\textipa{\\textctc}",
 "\u0291" : r"\\textipa{\\textctz}",
 "\u027A" : r"\\textipa{\\textturnlonglegr}",
 "\u0267" : r"\\textipa{\\texththeng}",
 "\u02A6" : r"\\textipa{\\texttslig}",
 "\u02A3" : r"\\textipa{\\textdzlig}",
 "\u02A7" : r"\\textipa{\\textteshlig}",
 "\u02A4" : r"\\textipa{\\textdyoghlig}",
 "\u02A8" : r"\\textipa{\\texttctclig}",
 "\u02A5" : r"\\textipa{\\textdctzlig}",
 "\u025A" : r"\\textipa{\\textrhookschwa}",
 "\u025D" : r"\\textipa{\\textrhookrevepsilon}",
 "\u026B" : r"\\textipa{\\textltilde}",
 "\u2197" : r"\\textipa{\\textglobrise}",
 "\u2198" : r"\\textipa{\\textglobfall}",
 "\u031D" : r"\\textipa{\\textprimstress}",
 "\u02C8" : r"\\textipa{\\textlengthmark}",
 "\u02D0" : r"\\textipa{\\textsecstress}",
 "\u02CC" : r"\\textipa{\\texthalflength}",
 "\u03C6" : r"\\textipa{\\textphi}",
 "\u03C9" : r"\\textipa{\\textomega}",
 "\u03C3" : r"\\textipa{\\textsigma}",
 "\u03BC" : r"\\textipa{\\textmu}",
 "\u002F" : r"\\textipa{\\slash}",
 "\u005B" : r"\\textipa{[}",
 "\u005D" : r"\\textipa{]}",
 "\u2205" : r"\\textipa{$\\varnothing$}",
 "\u0024" : r"\\textipa{\\$}",
 "\u0023" : r"\\textipa{\\#}",
 "\u2192" : r"\\textipa{\\rightarrow}",
 "\u2190" : r"\\textipa{\\leftarrow}",
 "\u007B" : r"\\textipa{{}",
 "\u007D" : r"\\textipa{}}",
 "\u3008" : r"\\textipa{\\textlangle}",
 "\u3009" : r"\\textipa{\\textrangle}",
 "\u030B" : r"\\textipa{\\H{???}}",
 "\u0301" : r"\\textipa{\\’???}",
 "\u0304" : r"\\textipa{\\=???}",
 "\u0300" : r"\\textipa{\\‘???}",
 "\u030F" : r"\\textipa{\\textdoublegrave{???}}",
 "\u030C" : r"\\textipa{\\v{???}}",
 "\u0302" : r"\\textipa{\\^???}",
 "\u1DC4" : r"\\textipa{\\texthighrise{???}}",
 "\u1DC5" : r"\\textipa{\\textlowrise{???}",
 "\u1DC8" : r"\\textipa{\\textrisefall{???}}",
 "\u02B0" : r"\\textipa{\\textsuperscript{h}}",
 "\u02ED" : r"\\textipa{\\textsuperscript{=}}",
 "\u207F" : r"\\textipa{\\textsuperscript{n}}",
 "\u02E1" : r"\\textipa{\\textsuperscript{l}",
 "\u02E4" : r"\\textipa{\\textsuperscript{\\textrevglotstop}}",
 "\u02E0" : r"\\textipa{\\textsuperscript{\\textgamma}}",
 "\u02B2" : r"\\textipa{\\textsuperscript{j}}",
 "\u02B7" : r"\\textipa{\\textsuperscript{w}}",
 "\u1D4A" : r"\\textipa{\\textsuperscript{\\textschwa}}",
 "\u0308" : r"\\textipa{\\"}",
 "\u033D" : r"\\textipa{\\textovercross{???}}",
 "\u0303" : r"\\textipa{$\\sim$}",
 "\u034A" : r"\\textipa{\\crtilde{???}}",
 "\u034B" : r"\\textipa{\\dottedtilde{???}}",
 "\u031A" : r"\\textipa{\\textcorner}",
 "\u030A" : r"\\textipa{\\textsubring{???}}",
 "\u0334" : r"\\textipa{\\textsuperimposetilde{???}}",
 "\u02DE" : r"\\textipa{ʼ}",
 "\u0325" : r"\\textipa{\\textsubring{???}",
 "\u032C" : r"\\textipa{\\textsubwedge{???}}",
 "\u0324" : r"\\textipa{\\textsubumlaut{???}}",
 "\u0330" : r"\\textipa{\\textsubtilde{???}}",
 "\u0339" : r"\\textipa{\\textsubrhalfring{???}}",
 "\u031C" : r"\\textipa{\\textsublhalfring{???}}",
 "\u033C" : r"\\textipa{\\textseagull{???}}",
 "\u032A" : r"\\textipa{\\textsubbridge{???}}",
 "\u033A" : r"\\textipa{\\textinvsubbridge{???}}",
 "\u033B" : r"\\textipa{\\textsubsquare{???}}",
 "\u031F" : r"\\textipa{\\textsubplus{???}",
 "\u0320" : r"\\textipa{\\textsubbar{???}}",
 "\u0329" : r"\\textipa{\\textsyllabic{???}}",
 "\u032F" : r"\\textipa{\\textsubarch{???}}",
 "\u0319" : r"\\textipa{\\textretracting{???}}",
 "\u0318" : r"\\textipa{\\textadvancing{???}}",
 "\u031E" : r"\\textipa{\\textlowering{???}}",
 "\u02D1" : r"\\textipa{\\textraising{???}}",
 "\u0306" : r"\\textipa{\\u{???}}"
}

    inp = main_e.get("1.0", "end")
    inp_str = str(inp.strip())

    top = Toplevel()
    top.title("LaTeX")
    top.geometry("1000x500")
    top.configure(bg="#ffffff")
    top_txt = Text(top, borderwidth=1.5, height=50, width=150, relief=RIDGE)
    top_txt.grid(row=0, column=0, sticky="NESW")

    top.columnconfigure(0, weight=1000)
    root.rowconfigure(0, weight=1000)

    top_txt.insert(END, r"%\\usepackage{tipa}" + "\\n" + r"%\\usepackage{textcomp}" + "\\n")
    for char in inp:
        if char in dic:
            top_txt.insert(END, str(dic[char]))
        if char not in dic:
            top_txt.insert(END, "??")

btn_cnv = Button(btn_frame,
                text="Convert to LaTeX",
                fg="#000000",
                image=px,
                height=15,
                width=160,
                compound="c",
                bd=0,
                relief=RIDGE,
                command=convert)
btn_cnv.grid(row=0, column=6)
btn_cnv["font"] = tnr
btn_cnv.configure(bg="#ffffff")

#Add all pulmonic consonant buttons:
#Plosives:
btn_u0070 = Button(cns_frame, text="\u0070", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0070"))
btn_u0070.grid(row=0, column=0)
btn_u0070.description = "Unvoiced bilabial plosive"

btn_u0062 = Button(cns_frame, text="\u0062", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0062"))
btn_u0062.grid(row=0, column=1)
btn_u0062.description = "Voiced bilabial plosive"

btn_u0074 = Button(cns_frame, text="\u0074", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0074"))
btn_u0074.grid(row=0, column=6)
btn_u0074.description = "Unvoiced alveolar plosive"

btn_u0064 = Button(cns_frame, text="\u0064", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0064"))
btn_u0064.grid(row=0, column=7)
btn_u0064.description = "Voiced alveolar plosive"

btn_u0288 = Button(cns_frame, text="\u0288", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0288"))
btn_u0288.grid(row=0, column=10)
btn_u0288.description = "Unvoiced retroflex plosive"

btn_u0256 = Button(cns_frame, text="\u0256", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0256"))
btn_u0256.grid(row=0, column=11)
btn_u0256.description = "Voiced retroflex plosive"

btn_u0063 = Button(cns_frame, text="\u0063", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0063"))
btn_u0063.grid(row=0, column=12)
btn_u0063.description = "Unvoiced palatal plosive"

btn_u025F = Button(cns_frame, text="\u025F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u025F"))
btn_u025F.grid(row=0, column=13)
btn_u025F.description = "Voiced palatal plosive"

btn_u006B = Button(cns_frame, text="\u006B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u006B"))
btn_u006B.grid(row=0, column=14)
btn_u006B.description = "Unvoiced velar plosive"

btn_u0261 = Button(cns_frame, text="\u0261", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0261"))
btn_u0261.grid(row=0, column=15)
btn_u0261.description = "Voiced velar plosive"

btn_u0071 = Button(cns_frame, text="\u0071", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0071"))
btn_u0071.grid(row=0, column=16)
btn_u0071.description = "Unvoiced uvular plosive"

btn_u0262 = Button(cns_frame, text="\u0262", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0262"))
btn_u0262.grid(row=0, column=17)
btn_u0262.description = "Voiced uvular plosive"

btn_u0294 = Button(cns_frame, text="\u0294", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0294"))
btn_u0294.grid(row=0, column=20)
btn_u0294.description = "Glottal plosive"

#Nasals:
btn_u006D = Button(cns_frame, text="\u006D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u006D"))
btn_u006D.grid(row=1, column=1)
btn_u006D.description = "Bilabial nasal"

btn_u0271 = Button(cns_frame, text="\u0271", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0271"))
btn_u0271.grid(row=1, column=3)
btn_u0271.description = "Labiodental nasal"

btn_u006E = Button(cns_frame, text="\u006E", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u006E"))
btn_u006E.grid(row=1, column=7)
btn_u006E.description = "Alveolar nasal"

btn_u0273 = Button(cns_frame, text="\u0273", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0273"))
btn_u0273.grid(row=1, column=11)
btn_u0273.description = "Retroflex nasal"

btn_u0272 = Button(cns_frame, text="\u0272", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0272"))
btn_u0272.grid(row=1, column=13)
btn_u0272.description = "Palatal nasal"

btn_u014B = Button(cns_frame, text="\u014B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u014B"))
btn_u014B.grid(row=1, column=15)
btn_u014B.description = "Velar nasal"

btn_u0274 = Button(cns_frame, text="\u0274", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0274"))
btn_u0274.grid(row=1, column=17)
btn_u0274.description = "Uvular nasal"

#Trills:
btn_u0299 = Button(cns_frame, text="\u0299", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0299"))
btn_u0299.grid(row=2, column=1)
btn_u0299.description = "Bilabial trill"

btn_u0072 = Button(cns_frame, text="\u0072", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0072"))
btn_u0072.grid(row=2, column=7)
btn_u0072.description = "Alveolar trill"

btn_u0280 = Button(cns_frame, text="\u0280", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0280"))
btn_u0280.grid(row=2, column=17)
btn_u0280.description = "Uvular trill"

#Taps or flaps:
btn_u2C71 = Button(cns_frame, text="\u2C71", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2C71"))
btn_u2C71.grid(row=3, column=3)
btn_u2C71.description = "Labiodental tap or flap"

btn_u027E = Button(cns_frame, text="\u027E", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u027E"))
btn_u027E.grid(row=3, column=7)
btn_u027E.description = "Alveolar tap or flap"

btn_u027D = Button(cns_frame, text="\u027D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u027D"))
btn_u027D.grid(row=3, column=11)
btn_u027D.description = "Retroflex tap or flap"

#Fricatives:
btn_u0278 = Button(cns_frame, text="\u0278", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0278"))
btn_u0278.grid(row=4, column=0)
btn_u0278.description = "Unvoiced bilabial fricative"

btn_u03B2 = Button(cns_frame, text="\u03B2", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03B2"))
btn_u03B2.grid(row=4, column=1)
btn_u03B2.description = "Voiced bilabial fricative"

btn_u0066 = Button(cns_frame, text="\u0066", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0066"))
btn_u0066.grid(row=4, column=2)
btn_u0066.description = "Unvoiced labiodental fricative"

btn_u0076 = Button(cns_frame, text="\u0076", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0076"))
btn_u0076.grid(row=4, column=3)
btn_u0076.description = "Voiced labiodental fricative"

btn_u03B8 = Button(cns_frame, text="\u03B8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03B8"))
btn_u03B8.grid(row=4, column=4)
btn_u03B8.description = "Unvoiced dental fricative"

btn_u00F0 = Button(cns_frame, text="\u00F0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u00F0"))
btn_u00F0.grid(row=4, column=5)
btn_u00F0.description = "Voiced dental fricative"

btn_u0073 = Button(cns_frame, text="\u0073", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0073"))
btn_u0073.grid(row=4, column=6)
btn_u0073.description = "Unvoiced alveolar fricative"

btn_u007A = Button(cns_frame, text="\u007A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u007A"))
btn_u007A.grid(row=4, column=7)
btn_u007A.description = "Voiced alveolar fricative"

btn_u0283 = Button(cns_frame, text="\u0283", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0283"))
btn_u0283.grid(row=4, column=8)
btn_u0283.description = "Unvoiced post-alveolar fricative"

btn_u0292 = Button(cns_frame, text="\u0292", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0292"))
btn_u0292.grid(row=4, column=9)
btn_u0292.description = "Voiced post-alveolar fricative"

btn_u0282 = Button(cns_frame, text="\u0282", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0282"))
btn_u0282.grid(row=4, column=10)
btn_u0282.description = "Unvoiced retroflex fricative"

btn_u0290 = Button(cns_frame, text="\u0290", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0290"))
btn_u0290.grid(row=4, column=11)
btn_u0290.description = "Voiced retroflex fricative"

btn_u00E7 = Button(cns_frame, text="\u00E7", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u00E7"))
btn_u00E7.grid(row=4, column=12)
btn_u00E7.description = "Unvoiced palatal fricative"

btn_u029D = Button(cns_frame, text="\u029D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u029D"))
btn_u029D.grid(row=4, column=13)
btn_u029D.description = "Voiced palatal fricative"

btn_u0078 = Button(cns_frame, text="\u0078", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0078"))
btn_u0078.grid(row=4, column=14)
btn_u0078.description = "Unvoiced velar fricative"

btn_u0263 = Button(cns_frame, text="\u0263", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0263"))
btn_u0263.grid(row=4, column=15)
btn_u0263.description = "Voiced velar fricative"

btn_u03C7 = Button(cns_frame, text="\u03C7", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03C7"))
btn_u03C7.grid(row=4, column=16)
btn_u03C7.description = "Unvoiced uvular fricative"

btn_u0281 = Button(cns_frame, text="\u0281", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0281"))
btn_u0281.grid(row=4, column=17)
btn_u0281.description = "Voiced uvular fricative"

btn_u0127 = Button(cns_frame, text="\u0127", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0127"))
btn_u0127.grid(row=4, column=18)
btn_u0127.description = "Unvoiced pharyngeal fricative"

btn_u0295 = Button(cns_frame, text="\u0295", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0295"))
btn_u0295.grid(row=4, column=19)
btn_u0295.description = "Voiced pharyngeal fricative"

btn_u0068 = Button(cns_frame, text="\u0068", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0068"))
btn_u0068.grid(row=4, column=20)
btn_u0068.description = "Unvoiced glottal fricative"

btn_u0266 = Button(cns_frame, text="\u0266", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0266"))
btn_u0266.grid(row=4, column=21)
btn_u0266.description = "Voiced glottal fricative"

#Approximants:
btn_u028B = Button(cns_frame, text="\u028B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u028B"))
btn_u028B.grid(row=5, column=3)
btn_u028B.description = "Labiodental approximant"

btn_u0279 = Button(cns_frame, text="\u0279", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0279"))
btn_u0279.grid(row=5, column=7)
btn_u0279.description = "Alveolar approximant"

btn_u027B = Button(cns_frame, text="\u027B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u027B"))
btn_u027B.grid(row=5, column=11)
btn_u027B.description = "Retroflex approximant"

btn_u006A = Button(cns_frame, text="\u006A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u006A"))
btn_u006A.grid(row=5, column=13)
btn_u006A.description = "Palatal approximant"

btn_u0270 = Button(cns_frame, text="\u0270", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0270"))
btn_u0270.grid(row=5, column=15)
btn_u0270.description = "Velar approximant"

#Lateral approximants:
btn_u006C = Button(cns_frame, text="\u006C", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u006C"))
btn_u006C.grid(row=6, column=7)
btn_u006C.description = "Alveolar lateral approximant"

btn_u026D = Button(cns_frame, text="\u026D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u026D"))
btn_u026D.grid(row=6, column=11)
btn_u026D.description = "Retroflex lateral approximant"

btn_u028E = Button(cns_frame, text="\u028E", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u028E"))
btn_u028E.grid(row=6, column=13)
btn_u028E.description = "Palatal lateral approximant"

btn_u029F = Button(cns_frame, text="\u029F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u029F"))
btn_u029F.grid(row=6, column=15)
btn_u029F.description = "Velar lateral approximant"

lbl_space = Label(cns_frame, text="", image=px, height=30, width=30, compound="c", bg="#ffffff").grid(row=4, column=22)

#Add all non-pulmonic consonant buttons:
#Clicks:
btn_u0298 = Button(npu_frame, text="\u0298", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0298"))
btn_u0298.grid(row=1, column=0)
btn_u0298.description = "Bilabial click"

btn_u01C0 = Button(npu_frame, text="\u01C0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01C0"))
btn_u01C0.grid(row=1, column=4)
btn_u01C0.description = "Dental click"

btn_u01C3 = Button(npu_frame, text="\u01C3", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01C3"))
btn_u01C3.grid(row=1, column=6)
btn_u01C3.description = "Alveolar click"

btn_u01C1 = Button(npu_frame, text="\u01C1", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01C1"))
btn_u01C1.grid(row=1, column=8)
btn_u01C1.description = "Post-alveolar click"

btn_u01C2 = Button(npu_frame, text="\u01C2", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01C2"))
btn_u01C2.grid(row=1, column=12)
btn_u01C2.description = "Palatal click"

#Implosives:
btn_u0253 = Button(npu_frame, text="\u0253", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0253"))
btn_u0253.grid(row=2, column=0)
btn_u0253.description = "Voiced bilabial implosive"

btn_u01A5 = Button(npu_frame, text="\u01A5", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01A5"))
btn_u01A5.grid(row=2, column=1)
btn_u01A5.description = "Voiceless bilabial implosive"

btn_u0257 = Button(npu_frame, text="\u0257", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0257"))
btn_u0257.grid(row=2, column=6)
btn_u0257.description = "Voiced alveolar implosive"

btn_u01AD = Button(npu_frame, text="\u01AD", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01AD"))
btn_u01AD.grid(row=2, column=7)
btn_u01AD.description = "Voiceless alveolar implosive"

btn_u0284 = Button(npu_frame, text="\u0284", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0284"))
btn_u0284.grid(row=2, column=8)
btn_u0284.description = "Voiced palatal implosive"

btn_u0188 = Button(npu_frame, text="\u0188", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0188"))
btn_u0188.grid(row=2, column=9)
btn_u0188.description = "Voiceless palatal implosive"

btn_u0260 = Button(npu_frame, text="\u0260", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0260"))
btn_u0260.grid(row=2, column=15)
btn_u0260.description = "Voiced velar implosive"

btn_u0199 = Button(npu_frame, text="\u0199", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0199"))
btn_u0199.grid(row=2, column=16)
btn_u0199.description = "Voiceless velar implosive"

btn_u029B = Button(npu_frame, text="\u029B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u029B"))
btn_u029B.grid(row=2, column=17)
btn_u029B.description = "Voiced uvular implosive"

btn_u02A0 = Button(npu_frame, text="\u02A0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A0"))
btn_u02A0.grid(row=2, column=18)
btn_u02A0.description = "Voiceless uvular implosive"

#Filler row for alignment:
fill_lb01 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb01.grid(row=0, column=0)

fill_lb02 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb02.grid(row=0, column=1)

fill_lb03 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb03.grid(row=0, column=2)

fill_lb04 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb04.grid(row=0, column=3)

fill_lb05 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb05.grid(row=0, column=4)

fill_lb06 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb06.grid(row=0, column=5)

fill_lb07 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb07.grid(row=0, column=6)

fill_lb08 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb08.grid(row=0, column=7)

fill_lb09 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb09.grid(row=0, column=8)

fill_lb10 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb10.grid(row=0, column=9)

fill_lb11 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb11.grid(row=0, column=10)

fill_lb12 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb12.grid(row=0, column=11)

fill_lb13 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb13.grid(row=0, column=12)

fill_lb14 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb14.grid(row=0, column=13)

fill_lb15 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb15.grid(row=0, column=14)

fill_lb16 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb16.grid(row=0, column=15)

fill_lb17 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb17.grid(row=0, column=16)

fill_lb18 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb18.grid(row=0, column=17)

fill_lb19 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb19.grid(row=0, column=18)

fill_lb20 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb20.grid(row=0, column=19)

fill_lb21 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb21.grid(row=0, column=20)

fill_lb22 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb22.grid(row=0, column=21)

fill_lb23 = Button(npu_frame, text="   ", image=px, height=10, width=30, compound="c", bd=0)
fill_lb23.grid(row=3, column=0, columnspan=20)

#Add all vowel buttons:
#High vowels:
btn_u0069 = Button(vow_frame, text="\u0069", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0069"))
btn_u0069.grid(row=0, column=0)
btn_u0069.description = "High front vowel unrounded"

btn_u0079 = Button(vow_frame, text="\u0079", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0079"))
btn_u0079.grid(row=0, column=1)
btn_u0079.description = "High front vowel rounded"

btn_u0268 = Button(vow_frame, text="\u0268", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0268"))
btn_u0268.grid(row=0, column=4)
btn_u0268.description = "High central vowel unrounded"

btn_u0289 = Button(vow_frame, text="\u0289", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0289"))
btn_u0289.grid(row=0, column=5)
btn_u0289.description = "High central vowel rounded"

btn_u026F = Button(vow_frame, text="\u026F", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u026F"))
btn_u026F.grid(row=0, column=8)
btn_u026F.description = "High back vowel unrounded"

btn_u0075 = Button(vow_frame, text="\u0075", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0075"))
btn_u0075.grid(row=0, column=9)
btn_u0075.description = "High back vowel rounded"

#Near-high:
btn_u026A = Button(vow_frame, text="\u026A", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u026A"))
btn_u026A.grid(row=1, column=2)
btn_u026A.description = "Near-high front vowel unrounded"

btn_u028F = Button(vow_frame, text="\u028F", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u028F"))
btn_u028F.grid(row=1, column=3)
btn_u028F.description = "Near-high front vowel rounded"

btn_u028A = Button(vow_frame, text="\u028A", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u028A"))
btn_u028A.grid(row=1, column=7)
btn_u028A.description = "Near-high back vowel rounded"

#Upper-mid:
btn_u0065 = Button(vow_frame, text="\u0065", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0065"))
btn_u0065.grid(row=2, column=0)
btn_u0065.description = "Upper-mid front vowel unrounded"

btn_u00F8 = Button(vow_frame, text="\u00F8", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u00F8"))
btn_u00F8.grid(row=2, column=1)
btn_u00F8.description = "Upper-mid front vowel rounded"

btn_u0258 = Button(vow_frame, text="\u0258", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0258"))
btn_u0258.grid(row=2, column=4)
btn_u0258.description = "Upper-mid central vowel unrounded"

btn_u0275 = Button(vow_frame, text="\u0275", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0275"))
btn_u0275.grid(row=2, column=5)
btn_u0275.description = "Mid central vowel rounded"

btn_u0264 = Button(vow_frame, text="\u0264", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0264"))
btn_u0264.grid(row=2, column=8)
btn_u0264.description = "Upper-mid back vowel unrounded"

btn_u006F = Button(vow_frame, text="\u006F", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u006F"))
btn_u006F.grid(row=2, column=9)
btn_u006F.description = "Upper-mid back vowel rounded"

#Central (only shwa):
btn_u0259 = Button(vow_frame, text="\u0259", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0259"))
btn_u0259.grid(row=3, column=4, columnspan=2)
btn_u0259.description = "Mid-central vowel rounded"

#Lower-mid:
btn_u025B = Button(vow_frame, text="\u025B", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u025B"))
btn_u025B.grid(row=4, column=0)
btn_u025B.description = "Lower-mid front vowel unrounded"

btn_u0153 = Button(vow_frame, text="\u0153", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0153"))
btn_u0153.grid(row=4, column=1)
btn_u0153.description = "Lower-mid front vowel rounded"

btn_u025C = Button(vow_frame, text="\u025C", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u025C"))
btn_u025C.grid(row=4, column=4)
btn_u025C.description = "Lower-mid central vowel unrounded"

btn_u025E = Button(vow_frame, text="\u025E", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u025E"))
btn_u025E.grid(row=4, column=5)
btn_u025E.description = "Lower-mid central vowel rounded"

btn_u028C = Button(vow_frame, text="\u028C", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u028C"))
btn_u028C.grid(row=4, column=8)
btn_u028C.description = "Lower-mid back vowel unrounded"

btn_u0254 = Button(vow_frame, text="\u0254", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0254"))
btn_u0254.grid(row=4, column=9)
btn_u0254.description = "Lower-mid back vowel rounded"

#Semi-low:
btn_u00E6 = Button(vow_frame, text="\u00E6", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u00E6"))
btn_u00E6.grid(row=5, column=0, columnspan=2)
btn_u00E6.description = "Near-low front vowel unrounded"

btn_u0250 = Button(vow_frame, text="\u0250", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0250"))
btn_u0250.grid(row=5, column=4, columnspan=2)
btn_u0250.description = "Near-low central vowel rounded"

#Low:
btn_u0061 = Button(vow_frame, text="\u0061", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0061"))
btn_u0061.grid(row=6, column=0)
btn_u0061.description = "Low front vowel unrounded"

btn_u0276 = Button(vow_frame, text="\u0276", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0276"))
btn_u0276.grid(row=6, column=1)
btn_u0276.description = "Low front vowel rounded"

btn_u0251 = Button(vow_frame, text="\u0251", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0251"))
btn_u0251.grid(row=6, column=8)
btn_u0251.description = "Low back vowel unrounded"

btn_u0252 = Button(vow_frame, text="\u0252", image=px, height=30, width=20, compound="c", bd=0, command=lambda: btn_click("\u0252"))
btn_u0252.grid(row=6, column=9)
btn_u0252.description = "Low back vowel rounded"

fill_lb24 = Button(vow_frame, text="   ", image=px, height=30, width=20, compound="c", bd=0)
fill_lb24.grid(row=0, column=10, rowspan=6)

#Add all tone buttons:
#Level diacritics:
btn_u030B = Button(ton_frame, text="\u25CC\u030B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u030B"))
btn_u030B.grid(row=0, column=0)
btn_u030B.description = "Extra high tone"

btn_u0301 = Button(ton_frame, text="\u25CC\u0301", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0301"))
btn_u0301.grid(row=1, column=0)
btn_u0301.description = "High tone"

btn_u0304 = Button(ton_frame, text="\u25CC\u0304", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0304"))
btn_u0304.grid(row=2, column=0)
btn_u0304.description = "Mid tone"

btn_u0300 = Button(ton_frame, text="\u25CC\u0300", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0300"))
btn_u0300.grid(row=3, column=0)
btn_u0300.description = "Low tone"

btn_u030F = Button(ton_frame, text="\u25CC\u030F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u030F"))
btn_u030F.grid(row=4, column=0)
btn_u030F.description = "Extra low tone"

#Level chao tone bars:
btn_u02E5 = Button(ton_frame, text="\u02E5", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E5"))
btn_u02E5.grid(row=0, column=1)
btn_u02E5.description = "Extra high tone -- chao tone letter"

btn_u02E6 = Button(ton_frame, text="\u02E6", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E6"))
btn_u02E6.grid(row=1, column=1)
btn_u02E6.description = "High tone -- chao tone letter"

btn_u02E7 = Button(ton_frame, text="\u02E7", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E7"))
btn_u02E7.grid(row=2, column=1)
btn_u02E7.description = "Mid tone -- chao tone letter"

btn_u02E8 = Button(ton_frame, text="\u02E8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E8"))
btn_u02E8.grid(row=3, column=1)
btn_u02E8.description = "Low tone -- chao tone letter"

btn_u02E9 = Button(ton_frame, text="\u02E9", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E9"))
btn_u02E9.grid(row=4, column=1)
btn_u02E9.description = "Extra low tone -- chao tone letter"

#Contour diacritics:
btn_u030C = Button(ton_frame, text="\u25CC\u030C", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u030C"))
btn_u030C.grid(row=0, column=2)
btn_u030C.description = "Rising contour"

btn_u0302 = Button(ton_frame, text="\u25CC\u0302", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0302"))
btn_u0302.grid(row=1, column=2)
btn_u0302.description = "Falling contour"

btn_u1DC4 = Button(ton_frame, text="\u25CC\u1DC4", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u1DC4"))
btn_u1DC4.grid(row=2, column=2)
btn_u1DC4.description = "High rising contour"

btn_u1DC5 = Button(ton_frame, text="\u25CC\u1DC5", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u1DC5"))
btn_u1DC5.grid(row=3, column=2)
btn_u1DC5.description = "Low rising contour"

btn_u1DC8 = Button(ton_frame, text="\u25CC\u1DC8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u1DC8"))
btn_u1DC8.grid(row=4, column=2)
btn_u1DC8.description = "Rising-falling contour"

#Contour chao tone bars:
btn_RCCT = Button(ton_frame, text="\u02E9\u02E5", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E9\u02E5"))
btn_RCCT.grid(row=0, column=3)
btn_RCCT.description = "Rising contour -- chao tone letter"

btn_FCCT = Button(ton_frame, text="\u02E5\u02E9", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E5\u02E9"))
btn_FCCT.grid(row=1, column=3)
btn_FCCT.description = "Falling contour -- chao tone letter"

btn_HRCT = Button(ton_frame, text="\u02E6\u02E5", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E6\u02E5"))
btn_HRCT.grid(row=2, column=3)
btn_HRCT.description = "High rising contour -- chao tone letter"

btn_LRCT = Button(ton_frame, text="\u02E9\u02E8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E9\u02E8"))
btn_LRCT.grid(row=3, column=3)
btn_LRCT.description = "Low rising contour -- chao tone letter"

btn_RFCT = Button(ton_frame, text="\u02E7\u02E6\u02E7", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E7\u02E6\u02E7"))
btn_RFCT.grid(row=4, column=3)
btn_RFCT.description = "Rising-falling contour -- chao tone letter"

#Arrows:
btn_u2193 = Button(ton_frame, text="\u2193", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2193"))
btn_u2193.grid(row=5, column=0)
btn_u2193.description = "Downstep"

btn_u2191 = Button(ton_frame, text="\u2191", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2191"))
btn_u2191.grid(row=5, column=1)
btn_u2191.description = "Upstep"

btn_u2197 = Button(ton_frame, text="\u2197", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2197"))
btn_u2197.grid(row=5, column=2)
btn_u2197.description = "Global rise"

btn_u2198 = Button(ton_frame, text="\u2198", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2198"))
btn_u2198.grid(row=5, column=3)
btn_u2198.description = "Global fall"

#Add all diacritic modifiers:
btn_u02B0 = Button(mod_frame, text="\u25CC\u02B0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u030B"))
btn_u02B0.grid(row=0, column=0)
btn_u02B0.description = "Aspirated"

btn_u207F = Button(mod_frame, text="\u25CC\u207F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u207F"))
btn_u207F.grid(row=0, column=1)
btn_u207F.description = "Nasal release"

btn_u02E1 = Button(mod_frame, text="\u25CC\u02E1", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E1"))
btn_u02E1.grid(row=0, column=2)
btn_u02E1.description = "Lateral release"

btn_u02E4 = Button(mod_frame, text="\u25CC\u02E4", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E4"))
btn_u02E4.grid(row=0, column=3)
btn_u02E4.description = "Pharyngealised"

btn_u02E0 = Button(mod_frame, text="\u25CC\u02E0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02E0"))
btn_u02E0.grid(row=0, column=4)
btn_u02E0.description = "Velarised"

btn_u02B2 = Button(mod_frame, text="\u25CC\u02B2", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02B2"))
btn_u02B2.grid(row=0, column=5)
btn_u02B2.description = "Palatalised"

btn_u02B7 = Button(mod_frame, text="\u25CC\u02B7", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0307"))
btn_u02B7.grid(row=0, column=6)
btn_u02B7.description = "Labialised"

btn_u02ED = Button(mod_frame, text="\u25CC\u02ED", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02ED"))
btn_u02ED.grid(row=0, column=7)
btn_u02ED.description = "Unaspirated"

btn_u1D4A = Button(mod_frame, text="\u25CC\u1D4A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u1D4A"))
btn_u1D4A.grid(row=0, column=8)
btn_u1D4A.description = "Mid-central vowel release"

btn_u0308 = Button(mod_frame, text="\u25CC\u0308", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0308"))
btn_u0308.grid(row=0, column=9)
btn_u0308.description = "Centralised"

btn_u033D = Button(mod_frame, text="\u25CC\u033D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u033D"))
btn_u033D.grid(row=0, column=10)
btn_u033D.description = "Mid-centralised"

btn_u0303 = Button(mod_frame, text="\u25CC\u0303", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0303"))
btn_u0303.grid(row=0, column=11)
btn_u0303.description = "Nasalised"

btn_u034A = Button(mod_frame, text="\u25CC\u034A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u034A"))
btn_u034A.grid(row=0, column=12)
btn_u034A.description = "Denasalised"

btn_u034B = Button(mod_frame, text="\u25CC\u034B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u034B"))
btn_u034B.grid(row=0, column=13)
btn_u034B.description = "Nasal emission"

btn_u031A = Button(mod_frame, text="\u25CC\u031A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u031A"))
btn_u031A.grid(row=0, column=14)
btn_u031A.description = "No audible release"

btn_u030A = Button(mod_frame, text="\u25CC\u030A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u030A"))
btn_u030A.grid(row=0, column=15)
btn_u030A.description = "Voiceless"

btn_u0334 = Button(mod_frame, text="\u25CC\u0334", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0334"))
btn_u0334.grid(row=0, column=16)
btn_u0334.description = "Velarised or pharyngealised"

btn_u02DE = Button(mod_frame, text="\u25CC\u02DE", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02DE"))
btn_u02DE.grid(row=0, column=17)
btn_u02DE.description = "Rhoticised"

btn_u02BC = Button(mod_frame, text="\u25CC\u02BC", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02BC"))
btn_u02BC.grid(row=0, column=17)
btn_u02BC.description = "Ejective"

btn_u0325 = Button(mod_frame, text="\u25CC\u0325", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0325"))
btn_u0325.grid(row=1, column=0)
btn_u0325.description = "Voiceless"

btn_u032C = Button(mod_frame, text="\u25CC\u032C", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u032C"))
btn_u032C.grid(row=1, column=1)
btn_u032C.description = "Voiced"

btn_u0324 = Button(mod_frame, text="\u25CC\u0324", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0324"))
btn_u0324.grid(row=1, column=2)
btn_u0324.description = "Breathy voiced"

btn_u0330 = Button(mod_frame, text="\u25CC\u0330", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0330"))
btn_u0330.grid(row=1, column=3)
btn_u0330.description = "Creaky voiced"

btn_u0339 = Button(mod_frame, text="\u25CC\u0339", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0339"))
btn_u0339.grid(row=1, column=4)
btn_u0339.description = "More rounded"

btn_u031C = Button(mod_frame, text="\u25CC\u031C", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u031C"))
btn_u031C.grid(row=1, column=5)
btn_u031C.description = "Less rounded"

btn_u033C = Button(mod_frame, text="\u25CC\u033C", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u033C"))
btn_u033C.grid(row=1, column=6)
btn_u033C.description = "Linguo-labial"

btn_u032A = Button(mod_frame, text="\u25CC\u032A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u032A"))
btn_u032A.grid(row=1, column=7)
btn_u032A.description = "Dental"

btn_u033A = Button(mod_frame, text="\u25CC\u033A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u033A"))
btn_u033A.grid(row=1, column=8)
btn_u033A.description = "Apical"

btn_u033B = Button(mod_frame, text="\u25CC\u033B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u033B"))
btn_u033B.grid(row=1, column=9)
btn_u033B.description = "Laminal"

btn_u031F = Button(mod_frame, text="\u25CC\u031F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u031F"))
btn_u031F.grid(row=1, column=10)
btn_u031F.description = "Advanced"

btn_u0320 = Button(mod_frame, text="\u25CC\u0320", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0320"))
btn_u0320.grid(row=1, column=11)
btn_u0320.description = "Retracted"

btn_u0329 = Button(mod_frame, text="\u25CC\u0329", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0329"))
btn_u0329.grid(row=1, column=12)
btn_u0329.description = "Syllabic"

btn_u032F = Button(mod_frame, text="\u25CC\u032F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u032F"))
btn_u032F.grid(row=1, column=13)
btn_u032F.description = "Non-syllabic"

btn_u0319 = Button(mod_frame, text="\u25CC\u0319", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0319"))
btn_u0319.grid(row=1, column=14)
btn_u0319.description = "Retracted tongue root"

btn_u0318 = Button(mod_frame, text="\u25CC\u0318", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0318"))
btn_u0318.grid(row=1, column=15)
btn_u0318.description = "Advanced tongue root"

btn_u031E = Button(mod_frame, text="\u25CC\u031E", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u031E"))
btn_u031E.grid(row=1, column=16)
btn_u031E.description = "Lowered"

btn_u031D = Button(mod_frame, text="\u25CC\u031D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u031D"))
btn_u031D.grid(row=1, column=17)
btn_u031D.description = "Raised"

#Add all suprasegmental markers:
btn_u02C8 = Button(sup_frame, text="\u25CC\u02C8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02C8"))
btn_u02C8.grid(row=0, column=0)
btn_u02C8.description = "Primary stress"

btn_u02CC = Button(sup_frame, text="\u25CC\u02CC", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02CC"))
btn_u02CC.grid(row=0, column=1)
btn_u02CC.description = "Secondary stress"

btn_u02D0 = Button(sup_frame, text="\u25CC\u02D0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02D0"))
btn_u02D0.grid(row=0, column=2)
btn_u02D0.description = "Long"

btn_u02D1 = Button(sup_frame, text="\u25CC\u02D1", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02D1"))
btn_u02D1.grid(row=0, column=3)
btn_u02D1.description = "Half-long"

btn_u0306 = Button(sup_frame, text="\u25CC\u0306", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0306"))
btn_u0306.grid(row=0, column=4)
btn_u0306.description = "Extra short"

#Transcription tools/phonology:
btn_u007C = Button(tra_frame, text="\u01C0", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u01C0"))
btn_u007C.grid(row=1, column=0)
btn_u007C.description = "Foot group"

btn_u2016 = Button(tra_frame, text="\u2016", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2016"))
btn_u2016.grid(row=1, column=1)
btn_u2016.description = "Intonation group"

btn_u203F = Button(tra_frame, text="\u203F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u203F"))
btn_u203F.grid(row=1, column=2)
btn_u203F.description = "Absence of break, linking"

btn_u03C6 = Button(tra_frame, text="\u03C6", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03C6"))
btn_u03C6.grid(row=1, column=3)
btn_u03C6.description = "Prosodic phrase"

btn_u03C9 = Button(tra_frame, text="\u03C9", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03C9"))
btn_u03C9.grid(row=1, column=4)
btn_u03C9.description = "Prosodic word"

btn_u03C3 = Button(tra_frame, text="\u03C3", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03C3"))
btn_u03C3.grid(row=1, column=5)
btn_u03C3.description = "Syllable"

btn_u03BC = Button(tra_frame, text="\u03BC", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u03BC"))
btn_u03BC.grid(row=1, column=7)
btn_u03BC.description = "Mora"

btn_u0024 = Button(tra_frame, text="\u0024", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0024"))
btn_u0024.grid(row=1, column=8)
btn_u0024.description = "Word boundary"

btn_u0023 = Button(tra_frame, text="\u0023", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0023"))
btn_u0023.grid(row=1, column=9)
btn_u0023.description = "Syllable boundary"

btn_u002F = Button(tra_frame, text="\u002F", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u002F"))
btn_u002F.grid(row=1, column=10)
btn_u002F.description = "Phonetic marker"

btn_u005B = Button(tra_frame, text="\u005B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u005B"))
btn_u005B.grid(row=1, column=11)
btn_u005B.description = "Phonemic marker left"

btn_u005D = Button(tra_frame, text="\u005D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u005D"))
btn_u005D.grid(row=1, column=12)
btn_u005D.description = "Phonemic marker right"

btn_u007B = Button(tra_frame, text="\u007B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u007B"))
btn_u007B.grid(row=1, column=13)
btn_u007B.description = "Brace notation, left bracket"

btn_u007D = Button(tra_frame, text="\u007D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u007D"))
btn_u007D.grid(row=1, column=14)
btn_u007D.description = "Brace notation, right bracket"

btn_u3008 = Button(tra_frame, text="\u3008", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u3008"))
btn_u3008.grid(row=1, column=15)
btn_u3008.description = "Angled bracket notation, left bracket"

btn_u3009 = Button(tra_frame, text="\u3009", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u3009"))
btn_u3009.grid(row=1, column=16)
btn_u3009.description = "Angled bracket notation, right bracket"

btn_u2205 = Button(tra_frame, text="\u2205", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2205"))
btn_u2205.grid(row=1, column=17)
btn_u2205.description = "Null"

btn_u2192 = Button(tra_frame, text="\u2192", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2192"))
btn_u2192.grid(row=1, column=18)
btn_u2192.description = "Rightwards arrow"

btn_u2190 = Button(tra_frame, text="\u2190", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u2190"))
btn_u2190.grid(row=1, column=19)
btn_u2190.description = "Leftwards arrow"

#Add other symbols:
btn_u028D = Button(oth_frame, text="\u028D", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u028D"))
btn_u028D.grid(row=0, column=0)
btn_u028D.description = "Voiceless labial velar approximant"

btn_u0077 = Button(oth_frame, text="\u0077", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0077"))
btn_u0077.grid(row=0, column=1)
btn_u0077.description = "Voiced labial velar approximant"

btn_u0265 = Button(oth_frame, text="\u0265", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0265"))
btn_u0265.grid(row=0, column=2)
btn_u0265.description = "Voiced labial palatal approximant"

btn_u029C = Button(oth_frame, text="\u029C", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u029C"))
btn_u029C.grid(row=0, column=3)
btn_u029C.description = "Voiceless epiglottal fricative"

btn_u02A2 = Button(oth_frame, text="\u02A2", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A2"))
btn_u02A2.grid(row=0, column=4)
btn_u02A2.description = "Voiced epiglottal fricative"

btn_u02A1 = Button(oth_frame, text="\u02A1", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A1"))
btn_u02A1.grid(row=0, column=5)
btn_u02A1.description = "Epiglottal plosive"

btn_u0255 = Button(oth_frame, text="\u0255", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0255"))
btn_u0255.grid(row=0, column=6)
btn_u0255.description = "Voiceless alveolo-palatal fricative"

btn_u0291 = Button(oth_frame, text="\u0291", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0291"))
btn_u0291.grid(row=0, column=8)
btn_u0291.description = "Voiced alveolo-palatal fricative"

btn_u027A = Button(oth_frame, text="\u027A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u027A"))
btn_u027A.grid(row=0, column=6)
btn_u027A.description = "Voiced alveolar lateral tap"

btn_u0267 = Button(oth_frame, text="\u0267", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u0267"))
btn_u0267.grid(row=0, column=8)
btn_u0267.description = "Rounded, labiodental, velarized fricative or dorsovelar voiceless fricative"

btn_u02A6 = Button(oth_frame, text="\u02A6", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A6"))
btn_u02A6.grid(row=0, column=9)
btn_u02A6.description = "Voiceless dental affricate"

btn_u02A3 = Button(oth_frame, text="\u02A3", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A3"))
btn_u02A3.grid(row=0, column=10)
btn_u02A3.description = "Voiced dental affricate"

btn_u02A7 = Button(oth_frame, text="\u02A7", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A7"))
btn_u02A7.grid(row=0, column=11)
btn_u02A7.description = "Voiceless post-alveolar affricate"

btn_u02A4 = Button(oth_frame, text="\u02A4", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A4"))
btn_u02A4.grid(row=0, column=12)
btn_u02A4.description = "Voiced post-alveolar affricate"

btn_u02A8 = Button(oth_frame, text="\u02A8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A8"))
btn_u02A8.grid(row=0, column=13)
btn_u02A8.description = "Voiceless alveolo-palatal affricate"

btn_u02A5 = Button(oth_frame, text="\u02A5", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u02A5"))
btn_u02A5.grid(row=0, column=14)
btn_u02A5.description = "Voiced alveolo-palatal affricate"

btn_u025A = Button(oth_frame, text="\u025A", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u025A"))
btn_u025A.grid(row=0, column=15)
btn_u025A.description = "Rhoticised schwa"

btn_u025D = Button(oth_frame, text="\u02A8", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u025D"))
btn_u025D.grid(row=0, column=16)
btn_u025D.description = "Rhoticised lower mid-central vowel"

btn_u026B = Button(oth_frame, text="\u026B", image=px, height=30, width=30, compound="c", bd=0, command=lambda: btn_click("\u026B"))
btn_u026B.grid(row=0, column=17)
btn_u026B.description = "Velarised voiced alveolar lateral approximant"

btn_list_s = [btn_u007C, btn_u2016, btn_u203F, btn_u0069, btn_u0079, btn_u0268, btn_u0289, btn_u026F, btn_u0075,
    btn_u026A, btn_u028F, btn_u028A, btn_u0065, btn_u00F8, btn_u0258, btn_u0275, btn_u0264, btn_u006F, btn_u0259,
    btn_u025B, btn_u0153, btn_u025C, btn_u025E, btn_u028C, btn_u0254, btn_u00E6, btn_u0250, btn_u0061, btn_u0276,
    btn_u0251, btn_u0252, btn_u030B, btn_u0301, btn_u0304, btn_u0300, btn_u030F, btn_u2193, btn_u2191, btn_u02E5,
    btn_u02E6, btn_u02E7, btn_u02E8, btn_u02E9, btn_u030C, btn_u0302, btn_u1DC4, btn_u1DC5, btn_u1DC8, btn_RCCT,
    btn_FCCT, btn_HRCT, btn_LRCT, btn_RFCT, btn_u2197, btn_u2193, btn_u2191, btn_u2198, btn_u0070, btn_u0062,
    btn_u0074, btn_u0064, btn_u0288, btn_u0256, btn_u0063, btn_u0063, btn_u025F, btn_u006B, btn_u0261, btn_u0071,
    btn_u0262, btn_u0294, btn_u006D, btn_u0271, btn_u006E, btn_u0273, btn_u0272, btn_u014B, btn_u0274, btn_u0299,
    btn_u0072, btn_u0280, btn_u2C71, btn_u027D, btn_u027E, btn_u0278, btn_u03B2, btn_u0066, btn_u0076, btn_u03B8,
    btn_u00F0, btn_u0073, btn_u007A, btn_u0283, btn_u0292, btn_u0282, btn_u0290, btn_u00E7, btn_u029D, btn_u0078,
    btn_u0263, btn_u03C7, btn_u0281, btn_u0127, btn_u0295, btn_u0068, btn_u0266, btn_u028B, btn_u0279, btn_u027B,
    btn_u006A, btn_u0270, btn_u006C, btn_u026D, btn_u028E, btn_u029F, btn_u0298, btn_u01C0, btn_u01C3, btn_u01C1,
    btn_u01C2, btn_u0253, btn_u0257, btn_u0284, btn_u0260, btn_u029B, btn_u01A5, btn_u01AD, btn_u0188, btn_u0199,
    btn_u02A0, btn_u028D, btn_u0077, btn_u0265, btn_u029C, btn_u02A2, btn_u02A1, btn_u0255, btn_u0291, btn_u027A,
    btn_u0267, btn_u02A6, btn_u02A3, btn_u02A7, btn_u02A4, btn_u02A8, btn_u02A5, btn_u025A, btn_u025D, btn_u026B,
    btn_u007C, btn_u2016, btn_u203F, btn_u03C6, btn_u03C9, btn_u03C3, btn_u03BC, btn_u002F, btn_u005B, btn_u005D,
    btn_u2205, btn_u0024, btn_u0023,btn_u2192, btn_u2190, btn_u007B, btn_u007D, btn_u3008, btn_u3009]
for item in btn_list_s:
    item.bind("<Enter>", enter)
    item.bind("<Leave>", leave)
    item["font"] = tnr
    item["bg"] = "#ffffff"

btn_list_l = [btn_u2197, btn_u2198, btn_u02B0, btn_u02ED, btn_u207F, btn_u02E1, btn_u02E4, btn_u02E0, btn_u02B2,
    btn_u02B7, btn_u1D4A, btn_u0308, btn_u033D, btn_u0303, btn_u034A, btn_u034B, btn_u031A, btn_u030A, btn_u0334,
    btn_u02DE, btn_u02BC, btn_u0325, btn_u032C, btn_u0324, btn_u0330, btn_u0339, btn_u031C, btn_u033C, btn_u032A,
    btn_u033A, btn_u033B, btn_u031F, btn_u0320, btn_u0329, btn_u032F, btn_u0319, btn_u0318, btn_u031E, btn_u031D,
    btn_u02C8, btn_u02D0, btn_u02CC, btn_u02D1, btn_u0306]
for item in btn_list_l:
    item.bind("<Enter>", enter)
    item.bind("<Leave>", leave)
    item["font"] = tnr_l
    item["bg"] = "#ffffff"

fil_list = [fill_lb01, fill_lb02, fill_lb03, fill_lb04, fill_lb05, fill_lb06, fill_lb07, fill_lb08, fill_lb09,
    fill_lb10, fill_lb11, fill_lb12, fill_lb13, fill_lb14, fill_lb15, fill_lb16, fill_lb17, fill_lb18, fill_lb19,
    fill_lb20, fill_lb21, fill_lb22, fill_lb23, fill_lb24]

for item in fil_list:
    item["bg"] = "#ffffff"

root.mainloop()
    `
}
