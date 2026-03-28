/**
 * research-publications.js
 * Filters and renders publications (papers, patents, books) for each research-group subpage.
 * Matches against each group's member keywords.
 */
(function () {
    const allPublications = {
        2026: {
            research: [],
            review: [],
            patents: [],
            books: [],
            chapters: []
        },
        2025: {
            research: [
                {
                    title: "Disulfiram-Encapsulated Poly(caprolactone) Nanofiber Scaffolds for Oral Squamous Cell Carcinoma Management",
                    authors: "G. Pandey, P. Famta, S. Shah, R. Kumar, S. Wagh, G. Vambhurkar, A. Sharma, A. Sharma, S. Shinde, G. Singh, S. Chandankar, A. Dalal, N.P. Kalia, A. Asthana, S. Srivastava",
                    journal: "BioNanoScience",
                    link: "https://doi.org/10.1007/S12668-025-02153-5"
                },
                {
                    title: "Quality by Design (QbD) accredited naringenin-loaded chitosan nanoparticles impregnated gel for diabetic wound healing: Formulation, optimization, In silico and In vitro characterization",
                    authors: "N. Abraham, T. Kolipaka, G. Pandey, D.K. Arya, A. Sharma, G. Vambhurkar, R. Kumar, P.S. Rajinikanth, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2025.107418"
                },
                {
                    title: "Hydroxy propyl β-cyclodextrin complexes of olaparib: Amalgamation of in silico, in vitro and in vivo approaches for bioavailability enhancement",
                    authors: "P. Famta, S. Shah, A. Sharma, G. Vambhurkar, Y. Singh, A. Mourya, D.A. Srinivasarao, S.B. Prasad, A. Shinde, G. Pandey, S. Thareja, J. Madan, S. Srivastava",
                    journal: "J Mol Struct",
                    link: "https://doi.org/10.1016/J.MOLSTRUC.2025.142077"
                },
                {
                    title: "Combating breast cancer-associated metastasis using paclitaxel and tranilast-loaded human serum albumin nanoparticles",
                    authors: "N. Jain, S. Shahrukh, P. Famta, S. Shah, G. Vambhurkar, D.A. Srinivasarao, A. Sharma, G. Pandey, S. Wagh, S. Shinde, A. Khan, P. Kumar, S. Srivastava",
                    journal: "Drug Dev Ind Pharm",
                    link: "https://doi.org/10.1080/03639045.2025.2509861"
                },
                {
                    title: "Quality-by-Design-Assisted Laboratory Scale-Up of Lipid Nanoparticles of Stearic Acid–Raloxifene Hydrochloride Conjugate: A Pathway for Enhanced Oral Bioavailability via Lymphatic Uptake",
                    authors: "A. Mourya, S. Kumar, S. Shah, P. Famta, V. Kanchupalli, S. Srivastava, J. Madan",
                    journal: "Mol Pharm",
                    link: "https://doi.org/10.1021/ACS.MOLPHARMACEUT.5C00139"
                },
                {
                    title: "QbD Manoeuvred Niclosamide Laden Polylactic-co-Glycolic Acid Nanoparticles-Impregnated Gelatin Nanofibers for the Management of Oral Carcinoma",
                    authors: "S. Shah, P. Famta, R. Kumar, G. Vambhurkar, G. Pandey, A. Shinde, S.B. Prasad, A. Sharma, A. Sharma, S. Kanaujiya, D.K. Arya, T. Kolipaka, S. Wagh, P.S. Rajinikanth, S. Srivastava",
                    journal: "BioNanoScience",
                    link: "https://doi.org/10.1007/S12668-025-01833-6"
                },
                {
                    title: "Topical delivery of baricitinib-impregnated nanoemulgel: a promising platform for inhibition of JAK-STAT pathway for the effective management of atopic dermatitis",
                    authors: "S. Nene, G. Devabattula, G. Vambhurkar, K.P. Tryphena, D.K. Khatri, C. Godugu, P.K. Singh, S. Srivastava",
                    journal: "Drug Delivery and Translational Research",
                    link: "https://doi.org/10.1007/S13346-024-01732-5"
                },
                {
                    title: "Dual-ligand functionalized liposomes with iRGD/trastuzumab co-loaded with gefitinib and lycorine for enhanced metastatic breast cancer therapy",
                    authors: "D.K. Arya, P. Pandey, A. Kumar, K. Chidambaram, A. Al Fatease, G. Pandey, S. Srivastava, P.S. Rajinikanth",
                    journal: "Journal of Liposome Research",
                    link: "https://doi.org/10.1080/08982104.2025.2457453"
                },
                {
                    title: "Docetaxel and niclosamide-loaded nanofiber systems for improved chemo-therapeutic activity and resistance reversal in prostate cancer",
                    authors: "S. Shah, P. Famta, G. Vambhurkar, R. Kumar, G. Pandey, G. Singh, S. Wagh, S. Kanaujiya, D.K. Arya, A. Sharma, A. Shinde, S. Bhanu Prasad, S. Chandankar, S. Shinde, A. Sharma, P.S. Rajinikanth, D.K. Khatri, A. Asthana, S. Srivastava",
                    journal: "Drug Development and Industrial Pharmacy",
                    link: "https://doi.org/10.1080/03639045.2025.2453533"
                },
                {
                    title: "Nanoparticle-enhanced delivery of resveratrol for targeted therapy of glioblastoma: Modulating the Akt/GSK-3β/NF-κB pathway in C6 glioma cells",
                    authors: "G. Singh, P. Famta, S. Shah, G. Vambhurkar, G. Pandey, R. Kumar, P. Kumar, A. Mourya, J. Madan, S. Srivastava, D.K. Khatri",
                    journal: "Brain Research",
                    link: "https://doi.org/10.1016/J.BRAINRES.2024.149411"
                },
                {
                    title: "Quality by design empowered preparation of itraconazole albumin nanoparticles for prostate cancer",
                    authors: "S. Shah, P. Famta, A. Sharma, R. Kumar, G. Pandey, G. Vambhurkar, D.A. Srinivasarao, A. Shinde, S.B. Prasad, A. Asthana, S. Srivastava",
                    journal: "Drug Delivery and Translational Research",
                    link: "https://doi.org/10.1007/S13346-024-01592-Z"
                }
            ],
            review: [
                {
                    title: "Deciphering convection enhanced delivery: A paradigm shift for circumventing glioblastoma multiforme",
                    authors: "A. Sikder, V. Pasupuleti, P. Khairnar, V. Phatale, E. Amulya, S.S. Wagh, M. Negi, A. Asthana, R.S. Raghuvanshi, D.K. Khatri, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2024.106398"
                },
                {
                    title: "Despicable role of epithelial–mesenchymal transition in breast cancer metastasis: Exhibiting de novo restorative regimens",
                    authors: "P. Famta, S. Shah, B. Dey, K.C. Kumar, D. Bagasariya, G. Vambhurkar, G. Pandey, A. Sharma, D.A. Srinivasarao, R. Kumar, S.K. Guru, R.S. Raghuvanshi, S. Srivastava",
                    journal: "Cancer Pathogenesis and Therapy",
                    link: "https://doi.org/10.1016/J.CPT.2024.01.001"
                },
                {
                    title: "Harnessing electrospun nanofibers for comprehensive oral disease management: Current trends and future perspectives",
                    authors: "R. Gupta, G. Pandey, A. Kumar, A. Kapoor, S. Wagh, T. Kolipaka, P. Famta, A. Mishra, S. Srivastava, S.K. Misra",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2025.106681"
                },
                {
                    title: "Exploring advancements in polysaccharide-based approaches: The cornerstone of next-generation cartilage regeneration therapeutics",
                    authors: "N. Abraham, G. Pandey, T. Kolipaka, M. Negi, D.A. Srinivasarao, S. Srivastava",
                    journal: "Int J Biol Macromol",
                    link: "https://doi.org/10.1016/J.IJBIOMAC.2025.141352"
                },
                {
                    title: "Navigating the brain: Harnessing endogenous cellular hitchhiking for targeting neoplastic and neuroinflammatory diseases",
                    authors: "S.S. Wagh, P. Famta, S. Shah, G. Vambhurkar, G. Pandey, A. Sikder, G. Singh, S. Shukla, A. Sharma, S.B. Prasad, A. Shinde, R. Kumar, N.P. Kalia, R.S. Raghuvanshi, S. Srivastava",
                    journal: "Asian J Pharm Sci",
                    link: "https://doi.org/10.1016/J.AJPS.2025.101040"
                },
                {
                    title: "Harnessing peptide-based nanotherapeutics: Pioneering melanoma management from diagnosis to theranostics",
                    authors: "S. Shukla, P. Khairnar, A. Hedaoo, V. Phatale, G. Vambhurkar, S. Wagh, A. Sharma, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2025.106811"
                },
                {
                    title: "Navigating the complexities of diabetic foot ulcers: From pathophysiology to advanced treatment strategies",
                    authors: "G. Pandey, T. Kolipaka, D.A. Srinivasarao, N. Abraham, A. Jain, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2025.106852"
                },
                {
                    title: "Advancements in skin tissue regeneration: Unveiling emerging treatment strategies, regulatory perspectives, and future directions for enhanced healing",
                    authors: "P. Jaiswal, G. Pandey, S. Kumar, T. Kolipaka, S.K. Misra, S. Kanaujiya, P.S. Rajinikanth, S. Srivastava, A.K. Yadav",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2025.106872"
                },
                {
                    title: "Unveiling the revolutionary approach for psoriasis management: Leveraging the breakthrough capabilities of hyaluronic acid",
                    authors: "A. Priyadarshinee, E. Amulya, G. Vambhurkar, A. Jain, N. Puri, P. Sahane, S. Srivastava",
                    journal: "Int J Biol Macromol",
                    link: "https://doi.org/10.1016/J.IJBIOMAC.2025.143089"
                },
                {
                    title: "Nano-chameleons: A review on cluster of differentiation-driven immune cell-engineered nanoarchitectonics for non-small cell lung cancer",
                    authors: "N. Puri, P. Sahane, V. Phatale, P. Khairnar, S. Shukla, A. Priyadarshinee, A. Jain, S. Srivastava",
                    journal: "Int J Biol Macromol",
                    link: "https://doi.org/10.1016/J.IJBIOMAC.2025.143440"
                },
                {
                    title: "Harnessing Folate Receptors: A Comprehensive Review on the Applications of Folate-Adorned Nanocarriers for the Management of Melanoma",
                    authors: "P. Sahane, N. Puri, P. Khairnar, V. Phatale, S. Shukla, A. Priyadarshinee, S. Srivastava",
                    journal: "ACS Appl Bio Mater",
                    link: "https://doi.org/10.1021/ACSABM.5C00077"
                },
                {
                    title: "Oral insulin delivery by spatiotemporal polymeric Micelles: Existing Barriers, Status Quo and opportunities",
                    authors: "T. Wangmo, K. Garg, A.A. Ibrahim, S. Srivastava, P. Famta, S.K. Singh, M. Gulati, K. Dua, J. Kaur",
                    journal: "Eur Polym J",
                    link: "https://doi.org/10.1016/J.EURPOLYMJ.2025.113981"
                },
                {
                    title: "Next-Generation Transformable Nanomedicines: Revolutionizing Cancer Drug Delivery and Theranostics",
                    authors: "S. Shinde, S. Shah, P. Famta, S. Wagh, G. Pandey, A. Sharma, G. Vambhurkar, A. Jain, S. Srivastava",
                    journal: "Mol Pharm",
                    link: "https://doi.org/10.1021/ACS.MOLPHARMACEUT.4C01495"
                },
                {
                    title: "Proteolysis targeting chimeras (PROTACs) in oncology: a review of patents and regulatory considerations",
                    authors: "S. M, R. Joga, K. Gandhi, S. Yerram, R.S. Raghuvanshi, S. Srivastava",
                    journal: "Pharm Pat Anal",
                    link: "https://doi.org/10.1080/20468954.2025.2500809"
                },
                {
                    title: "Hyaluronic acid-infused microneedles: Unlocking the revolutionary era of targeted melanoma treatment",
                    authors: "P. Sahane, P. Khairnar, A. Hedaoo, S. Shukla, N. Puri, V. Phatale, S.B. Prasad, A. Shinde, G. Vambhurkar, S. Srivastava",
                    journal: "Eur Polym J",
                    link: "https://doi.org/10.1016/J.EURPOLYMJ.2025.114205"
                },
                {
                    title: "Ever-Increasing Role of Computational Tools in Solid-State Pharmaceutics: Advancing Drug Development with Enhanced Molecular Understanding and Risk Assessment",
                    authors: "A. Sharma, S. Shah, S. Wagh, G. Pandey, A.K. Pradhan, S. Shukla, S.P. Thomas, A.G. Dikundwar, S. Srivastava",
                    journal: "Mol Pharm",
                    link: "https://doi.org/10.1021/ACS.MOLPHARMACEUT.5C00296"
                },
                {
                    title: "Unlocking therapeutic potential in traumatic brain injury: exploring microenvironmental targets, signaling pathways and translational hurdles",
                    authors: "D. Bahuguna, E. Amulya, S. Arya, S. Loharkar, G. Vambhurkar, S. Bhattacharjee, D.K. Chandanapalli, J. Madan, S. Srivastava",
                    journal: "Inflammopharmacology",
                    link: "https://doi.org/10.1007/S10787-025-01923-7"
                },
                {
                    title: "Regulatory science-aligned development and pre-clinical evaluation of novel lidocaine-loaded nanoemulgel for psoriasis management",
                    authors: "R. Joga, G. Vambhurkar, S. Srivastava",
                    journal: "Journal of Investigative Dermatology",
                    link: "https://doi.org/10.1016/J.JID.2025.09.218"
                }
            ],
            patents: [
                {
                    title: "PHARMACEUTICAL COMPOSITION OF RUXOLITINIB AND SALT THEREOF FOR THE MANAGEMENT OF SKIN MANIFESTATIONS",
                    inventors: "Ratnam Sreya, Shweta Nene, Ganesh B. Vambhurkar, Dr. Shashi Bala Singh, Dr. Saurabh Srivastava",
                    status: "granted",
                    file: "assets/docs/Patents/Ruxolitinib_Granted Patent Certificate.pdf"
                },
                {
                    title: "PHARMACEUTICAL COMPOSITION OF ROSUVASTATIN AND SALT THEREOF FOR THE MANAGEMENT OF RHEUMATOID ARTHRITIS",
                    inventors: "National Institute of Pharmaceutical Education and Research Hyderabad (Applicant) — Inventors: Dr. Saurabh Srivastava, Dr. Paras Famta, Saurabh Shah",
                    status: "granted",
                    file: "assets/docs/Patents/Rosuvastatin_Granted Patent.pdf"
                },
                {
                    title: "SOLUBLE DRUG DELIVERY COMPOSITION FOR LEISHMANIASIS AND METHOD FOR SYNTHESIS THEREOF",
                    inventors: "Atul Mourya, Saurabh Shah, Chantibabu Katta, Saurabh Srivastava, Jitender Madan, Vasundhra Bhandari, Amol Dikundwar, Shashi Bala Singh",
                    status: "granted",
                    file: "assets/docs/Patents/LEISHMANIASIS_Granted Patent.pdf"
                }
            ],
            books: [],
            chapters: []
        },
        2024: {
            research: [
                {
                    title: "Quality by Design Galvanized development of resveratrol loaded PLGA nanoparticles: In vitro and Ex vivo evaluation for the non-invasive treatment of metastatic melanoma",
                    authors: "G. Vambhurkar, P. Famta, S. Shah, N. Jain, D.A. Srinivasarao, A. Sharma, S. Shahrukh, D.K. Khatri, S.B. Singh, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2023.105252"
                },
                {
                    title: "Quality by design endorsed atorvastatin-loaded nanostructured lipid carriers embedded in pH-responsive gel for melanoma",
                    authors: "D. Bagasariya, K. Charankumar, S. Shah, P. Famta, V. Fernandes, S. Shahrukh, D.K. Khatri, S.B. Singh, S. Srivastava",
                    journal: "J Microencapsul",
                    link: "https://doi.org/10.1080/02652048.2023.2282971"
                },
                {
                    title: "Quality by design fostered fabrication of cabazitaxel loaded pH-responsive Improved nanotherapeutics against prostate cancer",
                    authors: "S. Shah, P. Famta, R. Kumar, A. Sharma, G. Vambhurkar, G. Pandey, G. Singh, P. Kumar, A. Mehra, A. Mourya, D.A. Srinivasarao, A. Shinde, S.B. Prasad, D.K. Khatri, S. Srivastava, J. Madan",
                    journal: "Colloids Surf B Biointerfaces",
                    link: "https://doi.org/10.1016/J.COLSURFB.2023.113732"
                },
                {
                    title: "Raloxifene loaded d-α-tocopherol polyethylene glycol 1000 succinate stabilized poly (ε-caprolactone) nanoparticles augmented drug delivery and apoptosis in breast cancer cells",
                    authors: "A. Mourya, P. Famta, S. Shah, D.A. Srinivasarao, A. Sharma, G. Vambhurkar, B. Bojja, S. Arya, P. Devanagan, S.B. Prasad, A. Shinde, G. Singh, D.K. Khatri, S. Srivastava, J. Madan",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2024.105399"
                },
                {
                    title: "Transdermal delivery and exploration of preclinical anti-rheumatoid efficacy of pirfenidone embedded nanoemulgel in adjuvant-induced rat model",
                    authors: "R. Nooreen, S. Nene, G. Vambhurkar, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2024.105428"
                },
                {
                    title: "Quality by design enabled tumor microenvironment-responsive simvastatin-loaded liposomes for prostate cancer management",
                    authors: "S. Shahrukh, N. Jain, S. Shah, P. Famta, G. Vambhurkar, D.A. Srinivasarao, A. Sharma, R. Kumar, A. Shinde, S.B. Prasad, S.B. Singh, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2024.105474"
                },
                {
                    title: "Sulfo-butyl ether β-cyclodextrin inclusion complexes of bosutinib: in silico, in vitro and in vivo evaluation in attenuating the fast-fed variability",
                    authors: "S. Shah, P. Famta, G. Vambhurkar, D. Bagasariya, K.C. Kumar, D.A. Srinivasarao, N. Begum, A. Sharma, S. Shahrukh, N. Jain, D.K. Khatri, S. Srivastava",
                    journal: "Drug Delivery and Translational Research",
                    link: "https://doi.org/10.1007/S13346-023-01453-1"
                },
                {
                    title: "Evaluation of preclinical efficacy of apremilast-loaded liquid crystalline nanoparticulate gel in amelioration of atopic dermatitis",
                    authors: "S. Nene, G. Vambhurkar, K.P. Tryphena, P.K. Singh, D.K. Khatri, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2024.105653"
                },
                {
                    title: "Simvastatin-loaded gelatin-capped polycaprolactone nanoparticles for the post-operative management of breast cancer",
                    authors: "P. Famta, S. Shah, D.A. Srinivasarao, A. Sharma, R. Kumar, G. Vambhurkar, G. Pandey, S.B. Prasad, A. Shinde, A. Asthana, P.K. Ratna, B.K. Kumar, D.K. Arya, P.S. Rajinikanth, S. Srivastava",
                    journal: "J Drug Deliv Sci Technol",
                    link: "https://doi.org/10.1016/J.JDDST.2024.106163"
                },
                {
                    title: "Resveratrol-Ampicillin Dual-Drug Loaded Polyvinylpyrrolidone/Polyvinyl Alcohol Biomimic Electrospun Nanofiber Enriched with Collagen for Efficient Burn Wound Repair",
                    authors: "S. Kanaujiya, D.K. Arya, P. Pandey, S. Anjum, M.M. Anjum, D. Ali, S. Alarifi, S. Srivastava, P.S. Rajinikanth, S. Singh, G. Pandey, M.R. Vijayakumar, S. Sivakumar",
                    journal: "Int J Nanomedicine",
                    link: "https://doi.org/10.2147/IJN.S464046"
                }
            ],
            review: [],
            patents: [
                {
                    title: "PHARMACEUTICAL TOPICAL COMPOSITION COMPRISING ABROCITINIB FOR SKIN MANIFESTATIONS",
                    inventors: "Dr. Saurabh Srivastava, Dr. Giriraj Pandey, Akshita Jain, Tejaswini Kolipaka, Noella Abraham",
                    status: "granted",
                    file: "assets/docs/Patents/ABROCITINIB Granted Patent_202341036715.pdf"
                }
            ],
            books: [],
            chapters: []
        },
        2023: {
            research: [],
            review: [],
            patents: [
                {
                    title: "PHARMACEUTICAL COMPOSITIONS FOR OBESITY MANAGEMENT",
                    inventors: "Dr. Reddy's Laboratories Limited (Applicant) — Inventors: Dr. Saurabh Srivastava, Dr. Giriraj Pandey",
                    status: "granted",
                    file: "assets/docs/Patents/Patent Copy_Naltrexone.pdf"
                },
                {
                    title: "PHARMACEUTICAL COMPOSITION OF ROFLUMILAST FOR THE MANAGEMENT OF PSORIASIS",
                    inventors: "Velpula Prasannanjaneyulu, Shweta Nene, Ganesh B. Vambhurkar, Dr. Saurabh Srivastava",
                    status: "granted",
                    file: "assets/docs/Patents/Roflumilast_Granted Patent.pdf"
                },
                {
                    title: "PHARMACEUTICAL COMPOSITION OF PIRFENIDONE FOR THE MANAGEMENT OF RHEUMATOID ARTHRITIS",
                    inventors: "National Institute of Pharmaceutical Education and Research Hyderabad (Applicant) — Inventors: Shweta Nene, Dr. Saurabh Srivastava",
                    status: "granted",
                    file: "assets/docs/Patents/202341013877 PIRFENIDONE Grant Certificate.pdf"
                },
                {
                    title: "TOPICAL PHARMACEUTICAL COMPOSITION FOR TREATMENT OF PSORIASIS",
                    inventors: "National Institute of Pharmaceutical Education and Research Hyderabad (Applicant) — Inventors: Shweta Nene, Ganesh B. Vambhurkar, Dr. Saurabh Srivastava",
                    status: "granted",
                    file: "assets/docs/Patents/IBRUTINIB_PSORIASIS.pdf"
                },
                {
                    title: "PHARMACEUTICAL COMPOSITION OF TOFACITINIB FOR THE MANAGEMENT OF ATOPIC DERMATITIS",
                    inventors: "Dr. Shashi Bala Singh, Dr. Saurabh Srivastava, Atmakuri Srividya, Shweta Nene",
                    status: "granted",
                    file: "assets/docs/Patents/TOFACITINIB GRANTED PATENT.pdf"
                }
            ],
            books: [],
            chapters: []
        },
        2020: {
            research: [],
            review: [],
            patents: [
                {
                    title: "PHARMACEUTICAL COMPOSITIONS OF ACOTIAMIDE AND PROTON PUMP INHIBITOR",
                    inventors: "Yuvaneshwari Kanagasabapathy, HariHaran Venugopal, Nidhish Ayachi, Rahul Prakash Gangwal, Rajib Lochan, Dr. Saurabh Srivastava",
                    status: "published",
                    file: "assets/docs/Patents/WO2020104955_Acotiamide+PPI.pdf"
                }
            ],
            books: [],
            chapters: []
        },
        2017: {
            research: [],
            review: [],
            patents: [
                {
                    title: "PHARMACEUTICAL COMPOSITION FOR TREATING ACNE",
                    inventors: "Yogesh Bapurao Pawar, Kailas Khomane, Saurabh Srivastava, Bijay Kumar Padhi, Rajeev Singh Raghuvanshi",
                    status: "published",
                    file: "assets/docs/Patents/US20170340594A1_P ceutical Comp for Treating Acne.pdf"
                },
                {
                    title: "MODIFIED RELEASE NICERGOLINE COMPOSITIONS",
                    inventors: "Rajeev Singh Raghuvanshi, Bijay Kumar Padhi, Saurabh Srivastava, Amit Garg",
                    status: "published",
                    file: "assets/docs/Patents/WO2017006290_Nicergoline PCT publication.pdf"
                }
            ],
            books: [],
            chapters: []
        },
        2015: {
            research: [],
            review: [],
            patents: [
                {
                    title: "EXTENDED RELEASE DOSAGE FORMS OF METOPROLOL",
                    inventors: "Prashant Manohar Mandaogade, Venkatesh Madhavacharya Joshi, Saurabh Srivastava, Vinayak Dinkar Kadam, Girish Kumar Jain",
                    status: "granted",
                    file: "assets/docs/Patents/US8962016B2_Most Recent.pdf"
                }
            ],
            books: [],
            chapters: []
        },
        2008: {
            research: [],
            review: [],
            patents: [
                {
                    title: "PHARMACEUTICAL COMPOSITIONS OF BUPROPION",
                    inventors: "Venkatesh Madhavacharya Joshi, Pravin M. Mandaogade, Mahavir B. Chougule, Girish Kumar Jain, Saurabh Srivastava",
                    status: "published",
                    file: "assets/docs/Patents/WO2008026044A2_Bupropion Recent.pdf"
                }
            ],
            books: [],
            chapters: []
        }
    };

    const groupKeywords = {
        'neuro': [
            'Sikder',
            'Amulya',
            'Priyadarshinee',
            'Negi'
        ],
        'cancer': [
            'Famta',
            'Phatale',
            'S. Shukla',
            'S.S. Wagh',
            'S. Wagh',
            'N. Puri',
            'Shah',
            'Mourya',
            'S. Kanaujiya'
        ],
        'diabetes': [
            'Kolipaka',
            'Abraham',
            'Pandey',
            'Jain',
            'Kumar'
        ],
        'derma': [
            'Vambhurkar',
            'Khairnar',
            'Hedaoo',
            'P. Sahane',
            'Nene',
            'Abraham',
            'Joga',
            'Srividya'
        ],
        'solid-state': [
            'A. Sharma',
            'Pandia',
            'Mourya',
            'Shah',
            'Dikundwar'
        ]
    };

    function matchesGroup(personString, group) {
        if (!personString) return false;
        const keywords = groupKeywords[group] || [];
        return keywords.some(kw => personString.includes(kw));
    }

    function buildTable(papers) {
        let rows = '';
        papers.forEach((p, i) => {
            rows += `
                <tr>
                    <td data-label="S.No.">${i + 1}</td>
                    <td data-label="Title">${p.title}</td>
                    <td data-label="Authors">${p.authors}</td>
                    <td data-label="Journal">${p.journal || '—'}</td>
                    <td data-label="Link"><a href="${p.link}" target="_blank" rel="noopener noreferrer">View Paper</a></td>
                </tr>`;
        });
        return `
            <table class="papers-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Journal</th>
                        <th>Publication Link</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>`;
    }

    const _minorWords = new Set(['a','an','the','and','but','or','for','nor','on','at','to','by','up','in','of','as','is']);
    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map((w, i) =>
            (i === 0 || !_minorWords.has(w)) ? w.charAt(0).toUpperCase() + w.slice(1) : w
        ).join(' ');
    }

    function buildPatentsGrid(patents) {
        let items = '';
        patents.forEach(patent => {
            const displayTitle = toTitleCase(patent.title);
            const patentHref = patent.file || patent.link;
            items += `
                <div class="patent-card" style="margin-bottom: 1.5rem; padding: 1.5rem; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <h4 class="patent-title" style="font-family: var(--font-family-serif); font-size: 1.3rem; margin-bottom: 0.5rem;">${displayTitle}</h4>
                    <p class="patent-inventors" style="font-size: 1rem; opacity: 0.9; margin-bottom: 0.5rem;"><strong>Inventors:</strong> ${patent.inventors}</p>
                    <span class="patent-status ${patent.status}" style="display: inline-block; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.85rem; background: var(--accent-royal-blue-dark); color: white; margin-bottom: 0.75rem;">${patent.status.charAt(0).toUpperCase() + patent.status.slice(1)}</span>
                    ${patentHref && patentHref !== '#' ? `<br><a href="${patentHref}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-royal-blue-light); text-decoration: underline;">View Patent</a>` : ''}
                </div>`;
        });
        return `<div class="patents-list-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">${items}</div>`;
    }

    function buildBooksTable(books) {
        let rows = '';
        books.forEach((b, i) => {
            rows += `
                <tr>
                    <td data-label="S.No.">${i + 1}</td>
                    <td data-label="Title">${b.title}</td>
                    <td data-label="Authors/Editors">${b.authors}</td>
                    <td data-label="Publisher">${b.publisher || '—'}</td>
                </tr>`;
        });
        return `
            <table class="papers-table books-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Authors/Editors</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>`;
    }

    function buildChaptersTable(chapters) {
        let rows = '';
        chapters.forEach((c, i) => {
            rows += `
                <tr>
                    <td data-label="S.No.">${i + 1}</td>
                    <td data-label="Chapter Title">${c.title}</td>
                    <td data-label="Authors">${c.authors}</td>
                    <td data-label="Book Title">${c.bookTitle || '—'}</td>
                    <td data-label="Publisher">${c.publisher || '—'}</td>
                </tr>`;
        });
        return `
            <table class="papers-table book-chapters-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Chapter Title</th>
                        <th>Authors</th>
                        <th>Book Title</th>
                        <th>Publisher</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>`;
    }

    function renderGroupPublications() {
        const group = (document.body.dataset.researchGroup || '').toLowerCase();
        if (!group) return;

        const container = document.getElementById('rp-content');
        if (!container) return;

        let html = '';
        let totalCount = 0;

        const years = Object.keys(allPublications).map(Number).sort((a, b) => b - a);

        years.forEach(year => {
            const yd = allPublications[year];
            const researchMatch = (yd.research || []).filter(p => matchesGroup(p.authors, group));
            const reviewMatch   = (yd.review   || []).filter(p => matchesGroup(p.authors, group));
            const patentsMatch  = (yd.patents  || []).filter(p => matchesGroup(p.inventors, group));
            const booksMatch    = (yd.books    || []).filter(b => matchesGroup(b.authors, group));
            const chaptersMatch = (yd.chapters || []).filter(c => matchesGroup(c.authors, group));

            if (researchMatch.length === 0 && reviewMatch.length === 0 && patentsMatch.length === 0 && booksMatch.length === 0 && chaptersMatch.length === 0) return;

            totalCount += researchMatch.length + reviewMatch.length + patentsMatch.length + booksMatch.length + chaptersMatch.length;

            html += `<div class="rp-year-block">
                <div class="rp-year-label">${year}</div>`;

            if (researchMatch.length > 0) {
                html += `<div class="papers-list">
                    <h3 class="papers-category-title">Research Papers</h3>
                    ${buildTable(researchMatch)}
                </div>`;
            }

            if (reviewMatch.length > 0) {
                html += `<div class="papers-list">
                    <h3 class="papers-category-title">Review Papers</h3>
                    ${buildTable(reviewMatch)}
                </div>`;
            }

            if (patentsMatch.length > 0) {
                html += `<div class="papers-list">
                    <h3 class="papers-category-title">Patents</h3>
                    ${buildPatentsGrid(patentsMatch)}
                </div>`;
            }

            if (booksMatch.length > 0) {
                html += `<div class="papers-list">
                    <h3 class="papers-category-title">Books</h3>
                    ${buildBooksTable(booksMatch)}
                </div>`;
            }

            if (chaptersMatch.length > 0) {
                html += `<div class="papers-list">
                    <h3 class="papers-category-title">Book Chapters</h3>
                    ${buildChaptersTable(chaptersMatch)}
                </div>`;
            }

            html += `</div>`;
        });

        if (totalCount === 0) {
            container.innerHTML = `<p class="rp-empty-msg">No publications currently listed for this research group.</p>`;
        } else {
            container.innerHTML = html;
        }
    }

    document.addEventListener('DOMContentLoaded', renderGroupPublications);
})();
