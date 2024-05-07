const products = [
    {
        name: "LT PVC POWER & CONTROL CABLES",
        category: "LT Cables",
        identifier: "LT-PVC-POWER-CONTROL-CABLES",
        description: [
            {
                title: "Standards",
                content: ["IS-1554 (Part -1) 1988"]
            },
            {
                title: "Conductor",
                content: ["The most acceptable metals for wires & cables are copper and aluminium due to their higher conductivity & ductility. Copper has higher affinity for sulphur it corrodes in the atmosphere where sulphur fumes is present. In these conditions tinned copper should be used as it forms a protective film over it & prevents it from tarnishing. Aluminium oxide film present on the surface of aluminium conductor acts as a barrier to protect it from corrosion. CONDUCTOR CONSTRUCTION The most economical construction for conductor is solid conductor i.e. conductor made of one single wire. As the area of conductor increases, solid conductor becomes stiffer and difficult to handle, therefore stranded construction is adopted. Here the conductor is made of number of strands. The strands are arranged in spiral layers in 1+6+12+18+…… formations. This geometrical progression of strands provides more compactness & flexibility. The stranded construction of conductors is more suitable for crimping of lugs. To economize the weight of insulating material, to optimize overall diameter, conductors are shaped & compacted in higher sized cables. The stranded conductor is shaped in to a segment of a circle so that when all the cores are laid, they form a complete circle. These segments are identified as 2 Core- 180 degrees, 3 Core- 120 degrees, 4 Core- 90 degrees, 3.5 Core- 100/60 degrees. IS 1554 permits solid conductor construction up to 10 sqmm in aluminium and up to 6 sqmm in copper. It permits the use of shaped conductors for size from 16 sqmm onwards."]
            },
            {
                title: "Insulation",
                content: ["The PVC covering over conductor is called insulation and it is provided by extrusion process only. The insulated conductor is called a core."],
                bullets: [
                    "Insulation with type A PVC Compound as per IS: 5831, suitable for 70°C continuous operation."
                    , "Insulation with type C PVC Compound as per IS: 5831, suitable for 85°C continuous operation."
                ]
            },
            {
                title: "Laying Up",
                content: ["The cores are laid up with suitable lay. The final layer always has a right hand lay i.e. if you look along the cable, the cores move to your right hand or clock wise."]
            },
            {
                title: "Inner Sheath",
                content: ["Inner sheath is provided over the laid-up cores. It is provided to give circular shape to the cable and it provides bedding for the armouring. I.S. 1554 permits following two methods of applying the inner sheath of any thermoplastic material i.e. PVC."],
                bullets: [
                    "Extruded Inner Sheath: It is provided by extrusion of thermoplastic material over the laid-up cores. This type of inner sheath also acts as a water barrier between cores and outer sheath. Is case of a puncture in the outer sheath water cannot reach to the cores and hence we recommend that cables for outdoor underground uses should have extruded inner sheath.",
                    "Taped Inner Sheath: It is provided by wrapping a thermoplastic tape over the laid-up cores. This method saves a process and hence manufactures always provide this type of inner sheath unless the purchase specifications ask for extruded inner sheath."
                ]
            },
            {
                title: "Armouring",
                content: ["Cable armouring consists of galvanized steel wire / strip provided over the inner sheath in multi core cables and aluminium round wire / strip over the insulation in single core cables. It provides mechanical protection to the cable & carries earth fault current in case of short circuit of a core with armour.", "As per IS:1554 (Part-1) 1988, round wire armouring is provided in cable, where calculated diameter under armour is upto 13 mm. Above this the armouring is either with round wire or strip of size 4mm x 0.80mm. In long run of cables and in case of mines, round wire armouring is a must, as strip construction provide higher resistance to earth fault current and sometimes this current may not be sufficient to operate the circuit breaker in case of earth fault. In mines, the resistance of the armour in no case should exceed the resistance of the main core by more than 33% for safety reasons. To achieve this, sometimes tinned hard drawn copper wires are used along with galvanized steel wires. Sometimes two layers of round steel wire or steel strip are provided in opposite direction with barrier tape in between to provide extra protection. In case of single core cable for use in AC circuits, the material for armouring has to be non magnetic, as in this case the return current is not passing through the same cable and hence it will not cancel the magnetic field produced by the current. These magnetic lines which are oscillating in case of AC current will give rise to eddy current in magnetic armouring and hence armouring will become hot and this may lead to the failure of the cable. Generally hard drawn aluminium wires / strip are used for armouring in this case."
                ]
            }, {
                title: "Outer Sheath",
                content: ["The PVC covering over the armouring in case of armoured cables and over the inner sheath in case of un-armoured cables is called outer sheath. IS: 1554 specifies nominal and minimum thickness of outer sheath for unarmoured cables and only minimum thickness of outer sheath for armoured cables. Types of PVC compounds for outer sheath.", "1. Outer sheath with type ST1 PVC compound as per IS: 5831, which is suitable for 70°C continuous operation. ", "2.Outer sheath with type ST2 PVC compound as per IS: 5831, which is suitable for 85°C continuous operation.", "Currently in Power, Chemical, Fertilizer and Cement plants many PVC cables are placed in the cable shaft or on cable trays. In case of fire burning of this huge bunch of PVC cables, emits a dense corrosive smoke. Due to thick black smoke and toxic HCL content of the smoke visibility is impaired to a large extent & it also creates suffocation which totally defeats firefighting.", "To overcome these deficiencies cables were developed with FR / FRLSH / LSZH properties. We are capable of providing cables with any of these properties."
                ]
            }

        ]
    },
    {
        name: "LT XLPE POWER & CONTROL CABLES",
        identifier: "LT-XLPE-POWER-CONTROL-CABLES",
        category: "LT Cables",
        description: [{
            title: "Standards",
            content: ["IS-7098 (Part-1)"]
        },
        {
            title: "Conductor",
            content: ["The Conductor of power cable is generally made from EC grade aluminium and annealed high conductivity copper is used for control cables. All conductors conform to IS: 8130:1984. Power Cables with copper conductor can also be supplied as per customer requirement. The conductor is solid / stranded/ bunched as per requirements."]
        },
        {
            title: "Insulation",
            content: ["The conductor is insulated with XLPE (cross –linked Polyethylene) compound by extrusion."],
        },
        {
            title: "Laying Up",
            content: ["The cores are laid up with suitable lay. The final layer always has a right hand lay i.e. if you look along the cable, the cores move to your right hand or clock wise."]
        },
        {
            title: "Inner Sheath",
            content: ["The Laid up Cores Shall be Provided with an inner sheath applied either by extrusion or by wrapping. The fillers and inner sheath shall be on the following:", "Single Core cables do not have inner sheath it shall ensure that it is as circular as possible."],
            bullets: [
                "Unvulcanised rubber",
                "Thermoplastic materials"
            ]
        },
        {
            title: "Armouring",
            content: ["Armouring shall be applied over the insulation in case of single core cables and over the inner sheath in case of twin, three and multicore cables. The armour wires/strips shall be applied as closely as practicable. Where the calculated below armouring does not exceed 13mm. the armour shall consist of galvanised round steel wire and where calculated diameter below the armouring greater than 13 mm the armour shall consist of either galvanized round steel wire or galvanised steel strips."
            ]
        }, {
            title: "Outer Sheath",
            content: ["The PVC covering over the armouring in case of armoured cables and over the inner sheath in case of un-armoured cables is called outer sheath. IS: 1554 specifies nominal and minimum thickness of outer sheath for unarmoured cables and only minimum thickness of outer sheath for armoured cables. Types of PVC compounds for outer sheath:", "The advantages of XLPE Insulated cables in comparison to PVC insulated cables are asvunder:"
            ],
            bullets: [
                "Outer sheath with type ST1 PVC compound as per IS: 5831, which is suitable for 70°C continuous operation.",
                "Outer sheath with type ST2 PVC compound as per IS: 5831, which is suitable for 85°C continuous operation."
            ],
            advantages: [{
                title: "A. Technical Advantages",
                items: [
                    "Higher current rating, higher short circuit rating approx. 1.2 times than that of PVC.",
                    "XLPE is thermosetting in nature therefore it cannot be reprocessed.",
                    "Higher insulation resistance.",
                    "Higher resistance to moisture.",
                    "Better Resistance to surge currents.",
                    "Low Dielectric Losses.",
                    "Better resistance to chemicals.", "Longer service life.", "Allowable continuous operating temperature for XLPE cables is 90°C whereas it is only 70°C for PVC cables.", "Short circuit temperature for XLPE cables is 250°C whereas for PVC it is 160°C."
                ]
            }, {
                title: "B. Commercial Advantages",
                items: [
                    "Lower installation charges as the diameter of cable is comparatively lesser with smaller bending radius, requiring less space requirement for laying of cables.",
                    "Due to low specific gravity XLPE cables are lighter as compared to PVC cables.",
                    "Capable of carrying high current thru the same cross sectional area as compared to PVC insulated cables.",
                ]
            }
            ]
        }

        ]
    },
    {
        name: "LT XLPE AERIAL BUNCHED CABLES",
        category: "LT Cables",
        identifier: "LT-XLPE-AERIAL-BUNCHED-CABLES",
        description: [{
            title: "Standards",
            content: ["IS-14255"]
        },
        {
            title: "Conductor",
            content: ["Phase or street lighting Conductor: hard drawn Aluminium H2 or H4 grade as per IS: 8130, Messenger conductor: Aluminium Silica and Magnesium Alloy used after treatment as per IS: 398 (Part4)"]
        },
        {
            title: "Insulation",
            content: ["XLPE / PE applied by extrusion process.",
                "Identification of Phases",
                "By providing ridges on the insulation of phase conductors. One ridge for 1st phase, 2 and 3 ridges for 2nd and 3rd phases respectively.Neutral can have 4 ridges, if desired.", "Colour of Insulaiton", "Because the cable remains exposed to environment &amp; sunlight the insulation is mixed with a small amount of carbon black to stop deterioration of polyethylene due to UV radiation.", "Assembling", "The phase conductor along with the lighting conductor (where applicable) is twisted around messenger conductor.", "Construction",
                "The phase conductor can be of single phase and also of three phases.Lighting conductor can be also incorporated to give supply to the street lighting.Messenger conductor supports the weight of the cable and keeps the assembly strung under tension.The phase conductor is made of concentrically stranded Aluminium wires having 7 or 19 wires.The messenger conductor is made of specially treated silica, Magnesium Aluminium alloy having 7 wires.The phase conductor and lighting conductor where applicable are insulated with XLPE / PE compound.The messenger conductor, as per customer’s choice is kept either bare or insulated.The phase conductor along with lighting conductor, where applicable is twisted around the messenger conductor.Sometimes as a special case a neutral conductor is also provided separately.Generally, messenger acts as neutral path.",
                "This type of construction has the following additional advantages:"
            ],
            bullets: [
                "Cables are lighter in weight.",
                "Easy to install.",
                "Can be installed on poles, on walls etc.",
                "Easy to make termination and branch off joints on live wire as well.",
                "Protection against power theft."
            ]
        },
        ]
    },
    {
        name: "3 CORE FLAT PVC / XLPE CABLES",
        category: "Light Duty Cables",
        identifier: "3-CORE-FLAT-PVC-XLPE-CABLES",
        description: [{
            title: "Standards",
            content: ["IS-694, IS-8130, IS-5831 & Generaly-IS-7098 (Pt-I)"]
        },
        {
            title: "Conductor",
            content: ["Electrolytic Grade annealed bare copper with more than 101% Conductivity."]
        },
        {
            title: "Insulation",
            content: ["PVC TYPE-A/C/XLPE"]
        },
        {
            title: "Range",
            content: ["1.50 sqmm to 6.0 sqmm, above 6.0 sqmm can be supplied on request."]
        },
        {
            title: "Description",
            content: ["“V-Marc” is one of the most renowned manufacturer of India having a wide range of PVC/XLPE Insulated 3 Core Flat Cables. Our manufacturing units are well equipped with modern plant and machinery and have complete testing equipment backed up with well qualified and trained personnel. “V-Marc” 3 Core Flat Cables are used for quality conscious electrical contractors and recommended by leading consultants, builders, EPC buyers and are extensively used for domestic, industrial & agricultural purposes.", "“V - Marc” 3 core flat cables are highly recommended for submersible applications and manufactured with conductor comprised of annealed bare copper of electrolytic grade, bunched properly to ensure desired flexibility.We have Submersible cables insulated with a thermoset polymer known as cross linked polyethylene(XLPE) with uniform thickness.Each of the cores is coloured as red, yellow and blue by using modern extrusion techniques.The sheath with uniform thickness and moisture resistant PVC(Grade ST2) compound which is formulated and manufactured in -house is extruded over these coloured cores in a flat formation.The colour of the sheath is black / blue.The cable undergoes stringent quality checks from the inward of raw materials, during various stages of manufacturing and final testing as per the laid down specification and our own internal stringent quality norms.The cables are available with progressive sequential length marking, company name, size & voltage imprinted or embossed on sheath.",

            ],

        },
        {
            title: "",
            content: ["Following are the advantages offered by XLPE insulated cables over the PVC insulated cables."],
            bullets: [
                " Higher Current Rating: It can withstand continuous conductor temperature of 90°C as against 70°C for PVC.This means higher current carrying capacity and hence it is possible to use one size lower than that of PVC for the same current rating.These cables can withstand extreme voltage fluctuations.",
                "Higher Short Circuit Rating: It can withstand up to 130°C during emergency overloading as against 120°C for PVC.Hence, in case of emergency it can sustain for longer period of time as compared to PVC.",
                "Lighter in weight and smaller bending radius: It has lower density than PVC which makes them lighter in weight and has smaller bending radius than that of PVC.",
                "Lower di- electric constant and power factor: It results in saving in power losses which means saving in costs.",
                "Better Impact, abrasion, corrosion resistant: XLPE cables are safer than PVC cables against mechanical damage, abrasion & corrosion."
            ]
        }
            , {
            title: "Packing",
            content: [
                "From 1.50 sqmm to 6.0 Sqmm supplied in 500 meter & 100 meter packing & from 10.0 sqmm and above in 300 meter packing."
            ]
        }
        ]
    },
    {
        name: "SINGLE & MULTICORE ALUMINIUM CABLES",
        category: "Light Duty Cables",
        identifier: "SINGLE-MULTICORE-ALUMINIUM-CABLES",
        description: [{
            title: "Standards",
            content: ["IS: 694, ICE: 60227, BS: 6500, IS: 5831:1984, IS: 8130:1984"]
        },
        {
            title: "Conductor",
            content: ["The Conductors are manufactured from electrolytic grade, bright hard drawn Aluminium which makes it an excellent conductor of electricity, thus helps in saving energy. Conductor upto10 sqmm Solid Circular, Above 10 sqmm Stranded Circular/Sector Shaped."]
        },
        {
            title: "Insulation",
            content: ["PVC as per IS-5831"]
        },
        {
            title: "Sheath",
            content: ["PVC as per IS-5831"]
        },
        {
            title: "Description",
            content: ["“V-Marc” single & multi core PVC industrial wires & cables find a wide range of applications in the control panels, appliances, machine tools, machinery and are used in almost every industry.",
                "The conductors are drawn from electrolytic grade aluminium conductor. The conductors are insulated with in-house formulated & manufactured PVC compound having high insulation resistance and dielectric strength.",
                "In case of Multicore Cables, the insulated cores are laid up to form the core assembly. The sheathing is provided with a specially formulated PVC compound of high oxygen and temperature index. These properties help in restricting the spread of fire even at very high ambient temperatures.",
                "The Single core and Multicore sheathed cables are manufactured as per IS:694: 2010, in sizes from 1.50 sqmm to 120 sqmm. These sizes carry the prestigious ISI mark and are duly approved by FIA/TAC. The rest of the sizes generally conform to IS 694: 2010."
            ],

        },
        ]
    },
    {
        name: "SINGLE & MULTICORE COPPER CABLES",
        category: "Light Duty Cables",
        identifier: "SINGLE-MULTICORE-COPPER-CABLES",
        description: [{
            title: "Standards",
            content: ["IS: 694, ICE: 60227, BS: 6500, IS: 5831:1984, IS: 8130:1984"]
        },
        {
            title: "Conductor",
            content: ["The Conductor manufactured from pure electrolytic grade, bright annealed bare copper with more than 101% conductivity makes it an excellent conductor of electricity, thus helps in saving energy."]
        },
        {
            title: "Insulation",
            content: ["PVC as per IS-5831"]
        },
        {
            title: "Sheath",
            content: ["PVC as per IS-5831"]
        },
        {
            title: "Range",
            content: ["1 core to 25 cores in various conductor sizes from 0.5 sqmm to 2.5 sqmm. For 2, 3 & 4 core sizes we have various conductor sizes ranging from 4.0 sqmm to 50 sqmm."]
        },
        {
            title: "Description",
            content: ["“V-Marc” single & multi core PVC industrial wires & cables find a wide range of applications in the control panels, appliances, machine tools, machinery and are used in almost every industry.",
                "The conductors drawn from 99.97% bright electrolytic grade copper with more than 101% conductivity are annealed and bunched together. The conductors are insulated with in-house formulated & manufactured PVC compound having high insulation resistance and dielectric strength.",
                "In case of Multicore Cables, the insulated cores are laid up to form the core assembly. The sheathing is provided with a specially formulated PVC compound of high oxygen and temperature index. These properties help in restricting the spread of fire even at very high ambient temperatures.",
                "The Single core and Multicore sheathed cables are manufactured as per IS:694: 2010, in sizes from 1.50 sqmm to 120 sqmm. These sizes carry the prestigious ISI mark and are duly approved by FIA/TAC. The rest of the sizes generally conform to IS 694: 2010."
            ],

        },
        ]
    },
    {
        name: "HFFR / ZHFR / LSZH MULTISTRAND CABLES",
        category: "Light Duty Cables",
        identifier: "HFFR-ZHFR-LSZH MULTISTRAND-CABLES",
        description: [{
            title: "Standards",
            content: ["IS 17048, IEC 60332-1 &amp; 3, IEC 60754-1 &amp; 2, IS 8130"]
        },
        {
            title: "Conductor",
            content: ["Halogen Free Flame Retardant cables are made of bright annealed bare copper of highly pure electrolytic grade with more than 101% conductivity which makes it an excellent conductor of electricity thus helps in saving energy."]
        },
        {
            title: "Insulation",
            content: ["HFFR (Halogen Free Flame Retardant) wiring cables are made with an imported specially formulated non-PVC material. It is a product with most advanced polymer technology. It does not emit any corrosive halogen acid gases/toxic fumes and there is almost negligible smoke. In case of fire the conventional wires or cables would produce more toxic gases which is very harmful for the environment and will also hamper the rescue operations as the visibility gets impaired. To combat this type of situations usage of HFFR (Halogen Free Flame Retardant) wires & cables are highly recommended."]
        },
        {
            title: "Range",
            content: ["“V-Marc” Multistrand Wires range from 1.00 sqmm up to 300 sqmm."]
        },
        ]
    },
    {
        name: "FRLSH MULTISTRAND CABLES",
        category: "Light Duty Cables",
        identifier: "FRLSH-MULTISTRAND-CABLES",
        description: [{
            title: "Standards",
            content: ["IS 694: FRLSH Category, IS 8130 &amp; IS 5831"]
        },
        {
            title: "Conductor",
            content: ["The Conductor is manufactured of pure electrolytic grade, bright annealed bare copper having very low resistance with more than 101% conductivity which makes it an excellent conductor of electricity, thus ensuring low energy losses."]
        },
        {
            title: "Insulation",
            content: ["FRLSH has special flame retardant, low smoke emitting and toxic fumes suppressing properties. The oxygen index of “V-Marc” Wires is minimum 32% which increases its efficiency in fire fighting. In case of fire, conventional PVC insulated wires give out thick black smoke and toxic fumes of hydrochloric acid gas. This causes asphyxia, impairs visibility and thus hampers rescue operations. FRLSH emits very little smoke and toxic gases; it also retards the spreading of fire."]
        },
        {
            title: "Range",
            content: ["“V-Marc” Multistrand Wires range from 1.00 sqmm up to 300 sqmm."]
        },
        ]
    },
    {
        name: "FR MULTISTRAND CABLES",
        category: "Light Duty Cables",
        identifier: "FR-MULTISTRAND-CABLES",
        description: [{
            title: "Standards",
            content: ["IS 694: FR Category, IS 8130 & IS 5831"]
        },
        {
            title: "Conductor",
            content: ["Flame Retardant Cables are made of Pure Electrolytic Grade, bright annealed bare copper with more than 100% conductivity which makes it an excellent conductor of electricity, thus helps in saving energy."]
        },
        {
            title: "Insulation",
            content: ["The conductors are insulated with a specially formulated Flame Retardant- FR grade PVC compound having high insulation resistance, oxygen, temperature index and dielectric strength which prevents leakage of electric current, its flame retardant properties minimize the spread of fire which ensures complete safety from electric shock, short circuit and fire."]
        },
        {
            title: "Range",
            content: ["V-Marc Multistrand Wires from 0.50 up to 300 Sq.mm."]
        },
        ]
    },
    {
        name: "HT CABLES (UPTO 33 KV)",
        category: "HT Cables",
        identifier: "HT-CABLES-UPTO-33-KV",
        description: [{
            title: "Standards",
            content: ["IS-7098 Part 2"]
        },
        {
            title: "Conductor",
            content: ["Stranded Class 2- Annealed Plain / Copper / Aluminium – IS: 8130 / IEC 60228/ BS 6360. "]
        },
        {
            title: "Conductor Screen",
            content: ["Extruded semi-conducting compound – IS: 7098 Part 2, IEC: 60502 Part – 2, BS: 6622, BS: 7835."]
        },
        {
            title: "Insulation",
            content: ["XLPE-IS: 7098 Part 2, IEC: 60502 Part 2, BS: 6622, BS: 7835."]
        },
        {
            title: "Non-metallic Screen",
            content: ["Extruded semi-conducting compound – IS: 7098 Part2, IEC: 60502 Part -2, BS: 6622, BS: 7835"]
        },
        {
            title: "Metallic Screen",
            content: ["Copper Wire/Tape or Aluminium Wire /Strip –     IS: 7098 Part2, IEC: 60502 Part-2, BS: 6622, BS: 7835."]
        },
        {
            title: "Fillers",
            content: ["Non hygroscopic PVC*/Polypropylene fillers to maintain roundness of cable."]
        },
        {
            title: "Inner Sheath/bedding",
            content: ["PVC ST 2 as per IS: 7098 Part2, IEC: 60502 Part- 2, BS: 6622, LSZH to BS: 7835."]
        },
        {
            title: "Armour",
            content: ["IS: 7098 Part2, IS: 3975, IEC: 60502 Part-2, BS: 6622, BS: 7835."]
        },
        {
            title: "Outer Sheath",
            content: ["PVC ST 2, FR, FRLSH, LSZH, HDPE as per IS: 7098 Part 2, IEC: 60502 Part-2, BS: 6622, BS: 7835."]
        },
        {
            title: "Range",
            content: [],
            bullets: [
                "Single Core from 35 Sq mm up to 1000 Sq mm", "Multicore from 35 Sq mm up to 400 Sq mm."
            ]
        },
        {
            title: "Quality Assurance Testing",
            content: ["V-Marc is self-sufficient to carry out all Routine & Type Tests in its own laboratory. It has world class testing facilities for Routine & Type Tests. Routine Tests: IS: 7098 Part 2, IEC: 60502, BS: 6622, BS: 7835 etc."],
            bullets: [
                "Partial Discharge Test", "High Voltage Test", "Conductor Resistance Test."]
        },
        {
            title: "Type Tests",
            content: ["The Cable Samples are type tested in-house to ensure conformance to various IS/IEC standards.", "IS: 7098 Part 2, IEC: 60502, BS: 6622, BS: 7835"],
            bullets: [
                "Electrical Type Tests",
                "Non - Electrical Type Tests",
                "Special Tests"
            ]
        },
        {
            title: "Customize Ht Cables",
            content: ["In addition to standard HT cable specifications, we can also customize HT cables for you based on your specific application needs. Our custom cable solutions can be developed and designed around a variety of parameters and manufacturing variants."
            ]
        },

        ]
    },
    {
        name: "MEDIUM VOLTAGE COVERED CONDUCTORS",
        category: "HT Cables",
        identifier: "MEDIUM-VOLTAGE-COVERED-CONDUCTORS",
        description: [
            {
                title: "Standards",
                content: ["IS:398(Part-II), IS:398(Part-IV), IEC :61089, EN 50397-1:2006, BS EN 50182"]
            },
            {
                title: "Conductor",
                content: ["Wires used in the construction of stranded conductor are either of aluminium alloy (AAAC) or aluminium alloy steel reinforced (ACSR) and are longitudinally water tight by means of water blocking material. The water blocking material should remain stable at 90℃. The water blocking material is put while bunching the stranded conductor. Water blocking material should be compatible with the conductor & conductor screen. It should not have any adverse impact on the mechanical & electrical properties of conductor & its screen."]
            },
            {
                title: "Conductor Screen",
                content: ["A semiconducting polymer screen is kept over the conductor to minimize the stresses of the conductor by smoothing its surface. This semiconducting layer is kept under the extruded insulation."],
            },
            {
                title: "Insulation",
                content: ["A layer of Cross linked Polyethylene (XLPE) applied over the inner semiconducting screen as main insulation."]
            },
            {
                title: "Outer Insulation",
                content: ["On the insulation a colored protective layer of UV resistant XLPE/HDPE is applied with anti-tracking properties.", "The semiconducting screen, inner insulation and outer insulation are extruded in one step i.e.triple extrusion to ensure a good, permanent bond among the three layers and also with the conductor."],
            },
            {
                title: "Technology",
                content: ["Covered conductor consists of multi strand round/compacted hard drawn aluminium alloy (AAAC) or aluminium conductor steel reinforced (ACSR) longitudinally water blocked & covered with special grades of materials which provide insulation & protection from UV rays. Like HT cables these conductors are provided with triple extrusion."
                ]
            },
            {
                title: "Description",
                content: ["Indian state utilities are making focused efforts for upgrading & strengthening medium voltage distribution lines in forest and wildlife sanctuaries to avoid fatal accidental death due to electrocution of wildlife birds & animals which come in contact with live overhead bare conductors. In last few decades we have noticed several electrocution cases in India.",
                    "1300 wild animals killed by electrocution in India within a decade: Report NGO Wildlife Protection Society of India As per data compiled by NGO Wildlife Protection Society of India (WPSI) between years 2010 to 2020 around 1300 wild animals lost their lives due to accidental electrocution.", "In various states such as Odisha, Kerala, Karnataka, Andhra Pradesh, Maharashtra, Gujarat, Assam, Tamil Nadu, Chhattisgarh, Jharkhand, Uttar Pradesh, Uttarakhand etc. witnessed high animal fatalities due to electrocution.",
                    "The main concerns to the electrical utilities are:"
                ],
                bullets: [
                    "Power interruptions due to conductor slashing during wind and stormy conditions. • Power interruptions due to contact of tree branches and creepers with live overhead conductors", "Electrocution of wild animals and ensuring safety in their natural habitat.", "High operation and maintenance cost.",
                    "High electrical losses due to corrosion / oxidation of open conductor.",
                    "Safety issue in congested residential areas.",
                    "Wide Right of way."
                ],
            }
        ]
    },
    {
        name: "CCTV CABLES",
        identifier: "cctv-cables",
        category: "Communication Cables",
        description: [
            {
                title: "Conductor",
                content: ["Flexible Bare Copper"]
            },
            {
                title: "Range",
                content: ["CCTV3+1, CCTV4+1"]
            },
            {
                title: "Description",
                content: ["“V-Marc” CCTV Cables are manufactured in 3+1 and 4+1 cores i.e. 3 or 4 cores for supply and 1 core for video. The CCTV Cable Offered by us is a composite structure of video and audio wires intended to install the cameras with audio system from one point to equipment system. We use best quality raw materials to ensure efficient operation. Further, our CCTV Cables are safe and reliable for transmission of voice, video & data. These CCTV Cables are available in various specifications and at reasonable prices to suit client’s specific needs."]
            },
        ]
    },
    {
        name: "CO-AXIAL CABLES",
        category: "Communication Cables",
        identifier: "CO-AXIAL-CABLES",
        description: [
            {
                title: "Conductor",
                content: ["A coaxial cable has a solid copper or copper-clad- aluminium center conductor surrounded by a non-conductive dielectric insulating material."]
            },
            {
                title: "Insulation",
                content: ["The dielectric is surrounded by foil shield/s and/or copper/braiding/s which form the outer conductor and also a shield against electromagnetic interference (EMI). The outer conductor/shield is encased in a PVC jacket."]
            },
            {
                title: "Range",
                content: ["RG-6 CU, RG-6 CCS"]
            },
            {
                title: "Description",
                content: ["The “V-Marc” Coaxial refers to the common axis of the conductors. Coaxial cables offer high bandwidth per channel and low noise & low crosstalk distortion, this makes it deliver high-definition video to and within the home. Short co-axial cables are used to connect equipment, such as TVs, DVRs, VCRs, CATV or CCTVs and satellite receivers.", "These Cables are uniquely designed for specialized applications. This translates to more happy customers, larger cable TV networks and more profits for the cable operators. The cables are with central conductor of copper clad aluminium (CCA) which offers less weight and hence can support longer span of cables. Also due to principle of skin effect, the copper cladding over the central aluminium conductor carries signal without any loss of signal quality."]
            },
            {
                title: "Packing",
                content: ["Supplied in attractive cartons / wooden drums."]
            },
        ]
    },
    {
        name: "LAN CABLES",
        category: "Communication Cables",
        identifier: "LAN-CABLES",
        description: [
            {
                title: "Standards",
                content: ["EN-50173, IEC-11801 & TIA/EIA 568 B-2"]
            },
            {
                title: "Insulation",
                content: ["High Destiny Polyethylene"]
            },
            {
                title: "Outer Jacket",
                content: ["FR PVC"]
            },
            {
                title: "Description",
                content: ["CAT 6 UTP cables are high performance cables used increasingly for modern complex computer network systems. These cables form the backbone of modern data transmission in commercial areas, industries, buildings etc.“V - Marc” Cables provide a wide range of CAT 5E Cable & fiber optic cables that are manufactured using quality tested materials.It is a twisted pair type cable designed for high signal integrity.Many such cables are unshielded but some are shielded types also.Category 5 has been superseded by the category 5e specifications.This type of cable is often used in structured cabling for computer networks such as ethernet and is also used to carry many other signals such as basic voice services.These products are known for high quality features like flexibility, compatibility and durability."]
            },
            {
                title: "Packing",
                content: ["Available in easy pull box of 305 Mtr."]
            },
        ]
    },
    {
        name: "TELEPHONE & SWITCHBOARD CABLES",
        category: "Communication Cables",
        identifier: "TELEPHONE-SWITCHBOARD-CABLES",
        description: [
            {
                title: "Standards",
                content: ["Cables are generally made as per TEC specification no. GR/WIR-06/03. MAR. 2002, BSNL (DOT)"]
            },
            {
                title: "Conductor",
                content: ["The conductor manufactured from pure electrolytic grade bright annealed bare solid copper conforming to IS: 8130: 2013 of diameter in 0.40 mm, 0.50mm."]
            },
            {
                title: "Conductor",
                content: ["The conductor manufactured from pure electrolytic grade bright annealed bare solid copper conforming to IS: 8130: 2013 of diameter in 0.40 mm, 0.50mm."]
            },
            {
                title: "Insulation",
                content: ["Specially formulated high grade PVC Compound as per Type -2 of IS: 13176:1981 hard grade and capable of withstanding higher conductor temperature upto 70°C. Colour of Insulation is as per Table -2 of G/WIR – 06/02 and colour shades and conforming to IS: 9938."]
            },
            {
                title: "Range",
                content: ["1 Pair to 100 Pair."]
            },
            {
                title: "Description",
                content: ["“V-MARC” Telephone & Switchboard Cables designed for voice clarity and elimination of cross talk are most suitable for indoor use in large offices / residential buildings, hotels and industrials complex to provide interconnection of telephone and intercom systems, PBX and for interconnections of distribution frames, switching and transmission equipment.", "The insulated cores of these cables are twisted to form a pair which is further connected with telephone switching lines to offer noise free audio signal. The structure of these cables makes them easy to connect, these are protected from interference and are capable of rectifying noise while offering clear audio signal."]
            },
            {
                title: "Laying Of Pairs",
                content: ["The cables (laid up pairs) are tightly wrapped with polyester tape applied with an overlap of 30%. This facility is not available in single pair."]
            },
            {
                title: "PVC Sheath",
                content: ["The laid-up pairs are further jacketed with grey colour, FR PVC compound having high oxygen Index suitable for 70°C continuous operation."]
            },
            {
                title: "Packing",
                content: ["We Supply telephone cable in woven bags and cloth packing, longer lengths are available on request."]
            },
        ]
    },
]

export default products