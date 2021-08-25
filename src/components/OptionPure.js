let pure = {
    default: {
        id : 1,
        name : "A110 Pure",
        price : 54700,
        color: "Opaque Glacier White paint",
        img: "sources-homepage/galerie/A110_PURE_4.jpg",
        description:"The Alpine A110 Pure is the version most faithful to the spirit of the legendary sedan that won the Monte Carlo Rally in 1973.",
        rims : "standard",
        saddlery : "Black leather and Dinamica bucket seats",
        equipments : {
            media : "Standard Sound System",
            comfort : {
                1: "Electrochromic interior mirror and cruise control",
                2: "speed limiter"
            },
            security : {
                1: "Emergency braking assistance",
                2: "Driver and passenger front airbags"
            },
            exterior_customization : "Grey Anthracite brake calipers",
            interior_customization : "Carbon matte harmony"
        }
    },
    color: {
        white: {
            name : "Opaque Glacier White paint",
            price: 0,
            img: "configurateur/couleurs/selection/blanc.jpg"
        },
        black: {
            name : "Deep Black Metallic Tint",
            price: 840,
            img : "configurateur/couleurs/selection/noir.jpg"
        },
        blue: {
            name : "Alpine Blue Special Tint",
            price: 1800,
            img : "configurateur/couleurs/selection/bleu.jpg"
        }
    },

    rims : {
        standard : {
            name : "standard",
            price: 0,
            color : {
                white :{ 
                    img : "configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg"
                },
                black :{
                    img : "configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg"
                },
                blue :{
                    img : "configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg"
                }
            }
        },
        serac : {
           name : "serac",
           price: 1000,
           color : {
                white :{
                    img : "configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg"
                },
                black :{
                    img : "configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg"
                },
                blue :{
                    img : "configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg"
                }
           }
        },
    },

    saddlery: {

        dinamica: {
            name : "Black leather and Dinamica bucket seats",
            price: 0,
            img: "configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg"

        },
        perforated: {
            name : "Comfort seats in black perforated leather",
            price: 800,
            img: "configurateur/interieurs/vues/cuir-noir_perfore-1.jpg"
        }

    },

    equipments : {

        design : {
            packH : {
                name : "Pack heritage",
                price : 180,
                img : "configurateur/equipements/categories/design/pack-heritage.jpg"
            },
            footrest : {
                name : "Aluminum passenger footrest",
                price : 96,
                img : "configurateur/equipements/categories/design/repose-pied-alu.jpg"
            }
        },

        media : {
            telemetrics : {
                name : "Alpine Telemetrics",
                price : 204,
                img : "configurateur/equipements/categories/media et navigation/alpine-metrics.jpg"
                
            },
            audio : {
                name : "Focal Sound System",
                price : 600,
                img : "configurateur/equipements/categories/media et navigation/audio-focal.jpg"
            },
            audioPremium : {
                name : "Premium Focal Sound System",
                price : 1200,
                img : "configurateur/equipements/categories/media et navigation/audio-premium.jpg"
            }
        },

        comfort : {
            foldingEx : {
                name : "Electric folding heated exterior mirrors",
                price : 504,
                img : "configurateur/equipements/categories/confort/retor-ext-chaffant.jpg"
            },
           storage: {
               name : "Pack Storage",
               price : 504,
               img : "configurateur/equipements/categories/confort/pack-rangement.jpg"
            },
        },

        driving : {
            parkingBack : {
                name : "Back parking assistance",
                price : 420,
                img : "configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg"
            },
            parkingFrontBack: {
               name : "Front & back parking assistance",
               price : 750,
               img : "configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg"
            },
            parkingFrontBackVideo: {
                name : "Front and back parking assistance and rear view camera",
                price : 1200,
                img : "configurateur/equipements/categories/conduite/camera-recul.jpg"
            },
            exhaust : {
                name : "Active Sport exhaust system",
                price : 1500,
                img : "configurateur/equipements/categories/conduite/echappement-sport.jpg"
            }
        },

        security : {
            brake : {
               name : "Emergency braking assistance",
               price : 1000,
               img : "configurateur/equipements/categories/securite/freinage-haute-perf.jpg"
            },
        },
        
        exterior_customization : {
            blue : {
                name : "Brake calipers color Alpine Blue",
                price : 384,
                img : "configurateur/equipements/categories/personnalisation exterieur/etrier-bleu.jpg"
            },
            logo : {
                name : "Alpine logo on front fenders",
                price : 120,
                img : "configurateur/equipements/categories/personnalisation exterieur/logo-alpine.jpg"
            },
        },

        interior_customization : {
            aluminium : {
                name : "Aluminum crankset",
                price : 120,
                img : "configurateur/equipements/categories/personnalisation interieur/pedal-alu.jpg"
            },
            logo : {
                name : "Logo in the center of the steering wheel in Alpine Blue",
                price : 84,
                img : "configurateur/equipements/categories/personnalisation interieur/logo-volant.jpg"
            },
            heated : {
                name : "heated seats",
                price : 400,
                img : "configurateur/equipements/categories/personnalisation interieur/siege-chauffant.jpg"
            }
        },
    },

    accessories : {

        transport_protection : {
            extinguisher : {
                name : "Fire extinguisher 1kg with pressure gauge",
                price : 22,
                img : "configurateur/accessoires/transport et protection/extincteur.jpg"
            },
            chain : {
                name : "Premium Grip Snow Chains",
                price : 336,
                img : "configurateur/accessoires/transport et protection/chaaine-neige.jpg"
            },
            alarme : {
                name : "alarme",
                price : 543,
                img : "configurateur/accessoires/transport et protection/alarme.jpg"
            },
            protection : {
                name : "OBD plug protection",
                price : 99,
                img : "configurateur/accessoires/transport et protection/protection-obd.jpg"
            },
            safety : {
                name : "Safety kit",
                price : 20,
                img : "configurateur/accessoires/transport et protection/kit-securite.jpg"
            },
            fix : {
                name : "Fire extinguisher attachment",
                price : 72,
                img : "configurateur/accessoires/transport et protection/kit-securite.jpg"
            }
        },

        multimedia : {
            camera : {
                name : "Sport camera holder",
                price : 89,
                img : "configurateur/accessoires/multimedia/support-camera.jpg"
            },
            phone : {
                name : "Magnetic smartphone holder - Dashboard mounting",
                price : 21,
                img : "configurateur/accessoires/multimedia/support-smartphone.jpg"
            }
        },

        inside : {
            carpet : {
                name : "Trunk carpet",
                price : 83,
                img : "configurateur/accessoires/interieur/tapis-coffre.jpg"
            },
            storage : {
                name : "Storage net - Horizontal",
                price : 59,
                img : "configurateur/accessoires/interieur/filet-rangement.jpg"
            }
        },

        outside : {
            cabochons : {
                name : "Alpine Cabochons - Metallic",
                price : 24,
                img : "configurateur/accessoires/exterieur/cabochons-metal.jpg"
            },
            cover : {
                name : "Alpine protective cover",
                price : 216,
                img : "configurateur/accessoires/exterieur/housse.jpg"
            },
            locks : {
                name : "Rim locks - Black",
                price : 51,
                img : "configurateur/accessoires/exterieur/antivol-jantes.jpg"
            }
        },

        garage : {
            battery : {
                name : "Battery charger",
                price : 240,
                img : "configurateur/accessoires/garage/chargeur-batterie.jpg"
            },
            storage : {
                name : "Alpine Tool Kit",
                price : 398,
                img : "configurateur/accessoires/garage/kit-outils.jpg"
            }
        },
    }
}

export default pure;