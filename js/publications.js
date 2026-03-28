document.addEventListener('DOMContentLoaded', () => {
    const publicationsData = {
        2026: {
            papers: {
                research: [
                    // No 2026 research papers provided in the prompt, adding a placeholder
                    {
                        title: "Placeholder Research Paper Title 2026",
                        authors: "A. Author, B. Author",
                        link: "#"
                    }
                ],
                review: [
                    // No 2026 review papers provided in the prompt, adding a placeholder
                    {
                        title: "Placeholder Review Paper Title 2026",
                        authors: "C. Author, D. Author",
                        link: "#"
                    }
                ]
            },
            patents: [
                {
                    title: "Novel Drug Delivery System for Cancer Treatment",
                    inventors: "Dr. S. Srivastava, A. Inventor, B. Inventor",
                    status: "granted",
                    image: "../assets/images/patent-placeholder.png", // Corrected path
                    link: "#"
                }
            ],
            books: {
                books: [],
                chapters: []
            }
        },
        2025: {
            papers: {
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
                     authors: "S. Srivatsan, B. Buonagurio, K. Nagashima, E. Conde-Garcia, W. Keat Lim, A. Le Floc, A.J. Murphy, S. Asrat, J.M. Orengo, D. Smilek, L. Cooney, M. Lytle, K. Boyle, M. Sherman, N. Lim, W. Gao, L. Li, C. Bromstead, P. Tosta, D. Rosmarin, J. Sobell, A. Ganesan, I. Hamzavi, G. Han, V. Huang, M. Rashighi, B. King, A. Golant, L.F. Eichenfield, V.H. Prajapati, L. Stein Gold, D. Krupa, M.S. Seal, D. Hanna, P. Burnett, H. Kim, K. Feller, J. Horowitz, J.M. Orengo, R. Joga, G. Vambhurkar, S. Srivastava, S. Chen, L. Petukhova, R.C. Betz, C. Tziotzios, M. Simpson, F. Buket Basmanav, L. Huilaja, M. Pat Reeve, A. Lejeune, G. Matharu, E. Tikkanen, V. Basey",
                     journal: "Journal of Investigative Dermatology",
                     link: "https://doi.org/10.1016/J.JID.2025.09.218"
                    },

                ]
            },
            books: {
                books: [
                    {
                        image: "../assets/images/book-cover-placeholder.png", // Placeholder image
                        title: "Nanomedicine: Principles and Applications",
                        authors: "J. Doe, R. Roe",
                        publisher: "Elsevier",
                        link: "#"
                    },
                    {
                        image: "../assets/images/book-cover-placeholder.png", // Placeholder image
                        title: "Advanced Drug Delivery Systems",
                        authors: "P. Smith, K. Jones",
                        publisher: "Springer",
                        link: "#"
                    }
                ],
                chapters: [
                    {
                        title: "Chapter 1: Nanoparticles in Cancer Therapy",
                        authors: "Dr. S. Srivastava, A. Contributor",
                        bookTitle: "Advances in Oncology",
                        publisher: "Wiley",
                        link: "#"
                    },
                    {
                        title: "Chapter 2: Transdermal Drug Delivery Innovations",
                        authors: "B. Contributor, C. Contributor",
                        bookTitle: "Pharmaceutical Technology",
                        publisher: "CRC Press",
                        link: "#"
                    }
                ]
            }
        },
        2024: {
            papers: {
                research: [
                    {
                        title: "Quality by Design Galvanized development of resveratrol loaded PLGA nanoparticles: In vitro and Ex vivo evaluation for the non-invasive treatment of metastatic melanoma",
                        authors: "G. Vambhurkar, P. Famta, S. Shah, N. Jain, D.A. Srinivasarao, A. Sharma, S. Shahrukh, D.K. Khatri, S.B. Singh, S. Srivastava",
                        journal: "J Drug Deliv Sci Technol",
                        journal: "J Drug Deliv Sci Technol",
                        link: "https://doi.org/10.1016/J.JDDST.2023.105252"
                    },
                    {
                        title: "Quality by design endorsed atorvastatin-loaded nanostructured lipid carriers embedded in pH-responsive gel for melanoma",
                        authors: "D. Bagasariya, K. Charankumar, S. Shah, P. Famta, V. Fernandes, S. Shahrukh, D.K. Khatri, S.B. Singh, S. Srivastava",
                        journal: "J Microencapsul",
                        journal: "J Microencapsul",
                        link: "https://doi.org/10.1080/02652048.2023.2282971"
                    },
                    {
                        title: "Quality by design fostered fabrication of cabazitaxel loaded pH-responsive Improved nanotherapeutics against prostate cancer",
                        authors: "S. Shah, P. Famta, R. Kumar, A. Sharma, G. Vambhurkar, G. Pandey, G. Singh, P. Kumar, A. Mehra, A. Mourya, D.A. Srinivasarao, A. Shinde, S.B. Prasad, D.K. Khatri, S. Srivastava, J. Madan",
                        journal: "Colloids Surf B Biointerfaces",
                        journal: "Colloids Surf B Biointerfaces",
                        link: "https://doi.org/10.1016/J.COLSURFB.2023.113732"
                    },
                    {
                        title: "Raloxifene loaded d-α-tocopherol polyethylene glycol 1000 succinate stabilized poly (ε-caprolactone) nanoparticles augmented drug delivery and apoptosis in breast cancer cells",
                        authors: "A. Mourya, P. Famta, S. Shah, D.A. Srinivasarao, A. Sharma, G. Vambhurkar, B. Bojja, S. Arya, P. Devanagan, S.B. Prasad, A. Shinde, G. Singh, D.K. Khatri, S. Srivastava, J. Madan",
                        journal: "J Drug Deliv Sci Technol",
                        journal: "J Drug Deliv Sci Technol",
                        link: "https://doi.org/10.1016/J.JDDST.2024.105399"
                    },
                    {
                        title: "Transdermal delivery and exploration of preclinical anti-rheumatoid efficacy of pirfenidone embedded nanoemulgel in adjuvant-induced rat model",
                        authors: "R. Nooreen, S. Nene, G. Vambhurkar, S. Srivastava",
                        journal: "J Drug Deliv Sci Technol",
                        journal: "J Drug Deliv Sci Technol",
                        link: "https://doi.org/10.1016/J.JDDST.2024.105428"
                    },
                    {
                        title: "Quality by design enabled tumor microenvironment-responsive simvastatin-loaded liposomes for prostate cancer management",
                        authors: "S. Shahrukh, N. Jain, S. Shah, P. Famta, G. Vambhurkar, D.A. Srinivasarao, A. Sharma, R. Kumar, A. Shinde, S.B. Prasad, S.B. Singh, S. Srivastava",
                        journal: "J Drug Deliv Sci Technol",
                        journal: "J Drug Deliv Sci Technol",
                        link: "https://doi.org/10.1016/J.JDDST.2024.105474"
                    },
                    {
                        title: "Sulfo-butyl ether β-cyclodextrin inclusion complexes of bosutinib: in silico, in vitro and in vivo evaluation in attenuating the fast-fed variability",
                        authors: "S. Shah, P. Famta, G. Vambhurkar, D. Bagasariya, K.C. Kumar, D.A. Srinivasarao, N. Begum, A. Sharma, S. Shahrukh, N. Jain, D.K. Khatri, S. Srivastava",
                        journal: "Drug Delivery and Translational Research",
                        journal: "Drug Delivery and Translational Research",
                        link: "https://doi.org/10.1007/S13346-023-01453-1"
                    },
                    {
                        title: "Evaluation of preclinical efficacy of apremilast-loaded liquid crystalline nanoparticulate gel in amelioration of atopic dermatitis",
                        authors: "S. Nene, G. Vambhurkar, K.P. Tryphena, P.K. Singh, D.K. Khatri, S. Srivastava",
                        journal: "J Drug Deliv Sci Technol",
                        journal: "J Drug Deliv Sci Technol",
                        link: "https://doi.org/10.1016/J.JDDST.2024.105653"
                    },
                    {
                        title: "Simvastatin-loaded gelatin-capped polycaprolactone nanoparticles for the post-operative management of breast cancer",
                        authors: "P. Famta, S. Shah, D.A. Srinivasarao, A. Sharma, R. Kumar, G. Vambhurkar, G. Pandey, S.B. Prasad, A. Shinde, A. Asthana, P.K. Ratna, B.K. Kumar, D.K. Arya, P.S. Rajinikanth, S. Srivastava",
                        journal: "J Drug Deliv Sci Technol",
                        journal: "J Drug Deliv Sci Technol",
                        link: "https://doi.org/10.1016/J.JDDST.2024.106163"
                    },
                    {
                        title: "Resveratrol-Ampicillin Dual-Drug Loaded Polyvinylpyrrolidone/Polyvinyl Alcohol Biomimic Electrospun Nanofiber Enriched with Collagen for Efficient Burn Wound Repair",
                        authors: "S. Kanaujiya, D.K. Arya, P. Pandey, S. Anjum, M.M. Anjum, D. Ali, S. Alarifi, S. Srivastava, P.S. Rajinikanth, S. Singh, G. Pandey, M.R. Vijayakumar, S. Sivakumar",
                        journal: "Int J Nanomedicine",
                        journal: "Int J Nanomedicine",
                        link: "https://doi.org/10.2147/IJN.S464046"
                    },
                    
                ],
                review: [
                     {
                        title: "Placeholder Review Paper Title 2025",
                        authors: "A. Author, B. Author",
                        link: "View Paper"
                    }
                ]
            },
            patents: [
                // No 2024 patents provided, adding placeholders
                {
                    title: "Controlled Release Formulation for Neurodegenerative Diseases",
                    inventors: "Dr. S. Srivastava, F. Inventor",
                    status: "published",
                    image: "../assets/images/patent-placeholder.png",
                    link: "#"
                }
            ],
            books: {
                books: [],
                chapters: []
            }
        },
        2023: {
            papers: { research: [], review: [] },
            patents: [],
            books: { books: [], chapters: [] }
        },
        2022: {
            papers: { research: [], review: [] },
            patents: [],
            books: { books: [], chapters: [] }
        },
        2021: {
            papers: { research: [], review: [] },
            patents: [],
            books: { books: [], chapters: [] }
        }
        // Add more years and publication data as needed
    };

    const yearSelector = document.querySelector('.year-selector');
    const publicationsContent = document.querySelector('.publications-content .container');
    const publicationSearchInput = document.getElementById('publication-search');
    const currentPageType = document.body.dataset.pageType; // 'papers', 'patents', or 'books'

    let currentYear = new Date().getFullYear(); // Default to current year or latest available

    // Function to generate year items
    function generateYearSelector() {
        const years = Object.keys(publicationsData).sort((a, b) => b - a); // Sort years descending
        yearSelector.innerHTML = '';
        years.forEach(year => {
            const yearItem = document.createElement('div');
            yearItem.classList.add('year-item');
            yearItem.textContent = year;
            yearItem.dataset.year = year;
            yearSelector.appendChild(yearItem);
        });

        // Set initial active year
        if (!years.includes(String(currentYear))) {
            currentYear = years[0]; // Fallback to latest year if current year not in data
        }
        selectYear(currentYear);
    }

    // Function to handle year selection
    function selectYear(year) {
        document.querySelectorAll('.year-item').forEach(item => {
            item.classList.remove('active');
        });
        const selectedYearItem = document.querySelector(`.year-item[data-year="${year}"]`);
        if (selectedYearItem) {
            selectedYearItem.classList.add('active');
            currentYear = year;
            renderPublications();
        }
    }

    // Function to render publications based on selected year and search query
    function renderPublications(searchQuery = '') {
        const yearData = publicationsData[currentYear];
        if (!yearData) {
            publicationsContent.innerHTML = `<p>No publications found for ${currentYear}.</p>`;
            return;
        }

        publicationsContent.innerHTML = ''; // Clear previous content

        // Add halo frame to section headings
        // The halo frame is typically a visual effect for titles. For section headings, a subtle variation
        // or just adhering to typography rules is usually sufficient. We'll apply the specific font.

        if (currentPageType === 'papers') {
            // Research Papers
            const researchPapers = yearData.papers.research.filter(p => 
                p.title.toLowerCase().includes(searchQuery) || 
                p.authors.toLowerCase().includes(searchQuery)
            );
            if (researchPapers.length > 0) {
                const researchSection = document.createElement('div');
                researchSection.classList.add('papers-list');
                researchSection.innerHTML = `<h2 class="papers-category-title">Research Papers</h2>`;
                const table = document.createElement('table');
                table.classList.add('papers-table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>Journal</th>
                            <th>Publication Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                `;
                researchPapers.forEach((paper, index) => {
                    const row = table.querySelector('tbody').insertRow();
                    row.innerHTML = `
                        <td data-label="S.No.">${index + 1}</td>
                        <td data-label="Title">${paper.title}</td>
                        <td data-label="Authors">${paper.authors}</td>
                        <td data-label="Journal">${paper.journal}</td>
                        <td data-label="Link"><a href="${paper.link}" target="_blank" rel="noopener noreferrer">View Paper</a></td>
                    `;
                });
                researchSection.appendChild(table);
                publicationsContent.appendChild(researchSection);
            }

            // Review Papers
            const reviewPapers = yearData.papers.review.filter(p => 
                p.title.toLowerCase().includes(searchQuery) || 
                p.authors.toLowerCase().includes(searchQuery)
            );
            if (reviewPapers.length > 0) {
                const reviewSection = document.createElement('div');
                reviewSection.classList.add('papers-list');
                reviewSection.innerHTML = `<h2 class="papers-category-title">Review Papers</h2>`;
                const table = document.createElement('table');
                table.classList.add('papers-table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Authors</th>
                            <th>Journal</th>
                            <th>Publication Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                `;
                reviewPapers.forEach((paper, index) => {
                    const row = table.querySelector('tbody').insertRow();
                    row.innerHTML = `
                        <td data-label="S.No.">${index + 1}</td>
                        <td data-label="Title">${paper.title}</td>
                        <td data-label="Authors">${paper.authors}</td>
                        <td data-label="Journal">${paper.journal}</td>
                        <td data-label="Link"><a href="${paper.link}" target="_blank" rel="noopener noreferrer">View Paper</a></td>
                    `;
                });
                reviewSection.appendChild(table);
                publicationsContent.appendChild(reviewSection);
            }
        } else if (currentPageType === 'patents') {
            const patents = yearData.patents.filter(p => 
                p.title.toLowerCase().includes(searchQuery) || 
                p.inventors.toLowerCase().includes(searchQuery)
            );
            if (patents.length > 0) {
                const patentsGrid = document.createElement('div');
                patentsGrid.classList.add('patents-grid');
                patents.forEach(patent => {
                    const patentCard = document.createElement('div');
                    patentCard.classList.add('patent-card');
                    patentCard.innerHTML = `
                        <div class="patent-image-wrapper">
                            <img src="${patent.image}" alt="${patent.title}" class="patent-image">
                        </div>
                        <div class="patent-info">
                            <h3 class="patent-title">${patent.title}</h3>
                            <p class="patent-inventors">${patent.inventors}</p>
                            <span class="patent-status ${patent.status}">${patent.status.charAt(0).toUpperCase() + patent.status.slice(1)}</span>
                            ${patent.link ? `<a href="${patent.link}" target="_blank" rel="noopener noreferrer" class="btn btn-small">View Patent</a>` : ''}
                        </div>
                    `;
                    patentsGrid.appendChild(patentCard);
                });
                publicationsContent.appendChild(patentsGrid);
            }
        } else if (currentPageType === 'books') {
            // Books
            const books = yearData.books.books.filter(b => 
                b.title.toLowerCase().includes(searchQuery) || 
                b.authors.toLowerCase().includes(searchQuery)
            );
            if (books.length > 0) {
                const booksSection = document.createElement('div');
                booksSection.classList.add('books-list');
                booksSection.innerHTML = `<h2 class="papers-category-title">Books</h2>`;
                const table = document.createElement('table');
                table.classList.add('books-table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Cover</th>
                            <th>Title</th>
                            <th>Authors/Editors</th>
                            <th>Publisher Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                `;
                books.forEach((book, index) => {
                    const row = table.querySelector('tbody').insertRow();
                    row.innerHTML = `
                        <td data-label="S.No.">${index + 1}</td>
                        <td data-label="Cover"><img src="${book.image}" alt="${book.title}" class="book-cover-image"></td>
                        <td data-label="Title">${book.title}</td>
                        <td data-label="Authors/Editors">${book.authors}</td>
                        <td data-label="Publisher"><a href="${book.link}" target="_blank" rel="noopener noreferrer">${book.publisher}</a></td>
                    `;
                });
                booksSection.appendChild(table);
                publicationsContent.appendChild(booksSection);
            }

            // Book Chapters
            const chapters = yearData.books.chapters.filter(c => 
                c.title.toLowerCase().includes(searchQuery) || 
                c.authors.toLowerCase().includes(searchQuery) ||
                c.bookTitle.toLowerCase().includes(searchQuery)
            );
            if (chapters.length > 0) {
                const chaptersSection = document.createElement('div');
                chaptersSection.classList.add('book-chapters-list');
                chaptersSection.innerHTML = `<h2 class="papers-category-title">Book Chapters</h2>`;
                const table = document.createElement('table');
                table.classList.add('book-chapters-table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Chapter Title</th>
                            <th>Authors</th>
                            <th>Book Title</th>
                            <th>Publisher Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                `;
                chapters.forEach((chapter, index) => {
                    const row = table.querySelector('tbody').insertRow();
                    row.innerHTML = `
                        <td data-label="S.No.">${index + 1}</td>
                        <td data-label="Chapter Title">${chapter.title}</td>
                        <td data-label="Authors">${chapter.authors}</td>
                        <td data-label="Book Title">${chapter.bookTitle}</td>
                        <td data-label="Publisher"><a href="${chapter.link}" target="_blank" rel="noopener noreferrer">${chapter.publisher}</a></td>
                    `;
                });
                chaptersSection.appendChild(table);
                publicationsContent.appendChild(chaptersSection);
            }
        }
    }

    // Event listener for year selection
    yearSelector.addEventListener('click', (event) => {
        const yearItem = event.target.closest('.year-item');
        if (yearItem) {
            selectYear(yearItem.dataset.year);
            publicationSearchInput.value = ''; // Clear search on year change
        }
    });

    // Event listener for search input
    let searchTimeout;
    publicationSearchInput.addEventListener('input', (event) => {
        clearTimeout(searchTimeout);
        const searchQuery = event.target.value.toLowerCase();
        searchTimeout = setTimeout(() => {
            renderPublications(searchQuery);
        }, 300); // Debounce search
    });

    // Initial render
    generateYearSelector();
});