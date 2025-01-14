export const businesscards = {
  "sku": "businesscards",
  "active": true,
  "titleSingle": "Visitekaartje",
  "titlePlural": "Visitekaartjes",
  "properties": [
    {
      "slug": "fold",
      "title": "Vouwwijze",
      "locked": false,
      "options": [
        {
          "slug": "no_fold",
          "name": "ongevouwen",
          "description": "Ongevouwen",
          "nullable": true
        },
        {
          "slug": "single_4",
          "name": "enkele vouw links",
          "description": "Enkele vouw links",
          "nullable": false
        },
        {
          "slug": "singlehorizontal_4",
          "name": "enkele vouw boven",
          "description": "Enkele vouw boven",
          "nullable": false
        }
      ]
    },
    {
      "slug": "size",
      "title": "Afgewerkt formaat (breedte x hoogte)",
      "locked": false,
      "options": [
        {
          "slug": "bc",
          "name": "85 x 55 mm (liggend)",
          "nullable": false
        },
        {
          "slug": "bc_portrait",
          "name": "55 x 85 mm (staand)",
          "nullable": false
        },
        {
          "slug": "bc_plus",
          "name": "90 x 50 mm (liggend)",
          "nullable": false
        },
        {
          "slug": "bc_plus_portrait",
          "name": "50 x 90 mm (staand)",
          "nullable": false
        },
        {
          "slug": "custom",
          "nullable": false,
          "customSizes": {
            "minHeight": 40,
            "minWidth": 40,
            "maxHeight": 460,
            "maxWidth": 460
          }
        }
      ]
    },
    {
      "slug": "printtype",
      "title": "Bedrukking",
      "locked": false,
      "options": [
        {
          "slug": "10",
          "name": "1/0 PMS",
          "nullable": false
        },
        {
          "slug": "20",
          "name": "2/0 PMS",
          "nullable": false
        },
        {
          "slug": "30",
          "name": "3/0 PMS",
          "nullable": false
        },
        {
          "slug": "40",
          "name": "4/0 full color",
          "nullable": false
        },
        {
          "slug": "11",
          "name": "1/1 PMS",
          "nullable": false
        },
        {
          "slug": "22",
          "name": "2/2 PMS",
          "nullable": false
        },
        {
          "slug": "33",
          "name": "3/3 PMS",
          "nullable": false
        },
        {
          "slug": "44",
          "name": "4/4 full color",
          "nullable": false
        },
        {
          "slug": "50_full_color_plus_white",
          "name": "5/0 full color + wit",
          "nullable": false
        },
        {
          "slug": "55_full_color_plus_white",
          "name": "5/5 full color + wit",
          "nullable": false
        }
      ]
    },
    {
      "slug": "delivery",
      "title": "Voorkeur verpakking",
      "locked": false,
      "options": [
        {
          "slug": "default_businesscard",
          "name": "Standaard verpakking",
          "nullable": true
        },
        {
          "slug": "businesscard_box",
          "name": "Visitekaartdoosje met model aan buitenzijde",
          "description": "Versturen in visitekaartdoosjes",
          "nullable": false
        }
      ]
    },
    {
      "slug": "material",
      "title": "Materiaal",
      "locked": false,
      "options": [
        {
          "slug": "300gr_gesatineerd_mc",
          "name": "300 g/m² gesatineerd mc",
          "nullable": false
        },
        {
          "slug": "350gr_gesatineerd_mc",
          "name": "350 g/m² gesatineerd mc",
          "nullable": false
        },
        {
          "slug": "400gr_gesatineerd_mc",
          "name": "400 g/m² gesatineerd mc",
          "nullable": false
        },
        {
          "slug": "300gr_silk_mc",
          "name": "300 g/m² silk mc",
          "nullable": false
        },
        {
          "slug": "350gr_silk_mc",
          "name": "350 g/m² silk mc",
          "nullable": false
        },
        {
          "slug": "400gr_silk_mc",
          "name": "400 g/m² silk mc",
          "nullable": false
        },
        {
          "slug": "300gr_biotop",
          "name": "300 g/m² Bio Top 3® naturel",
          "nullable": false
        },
        {
          "slug": "300gr_tintoretto_gesso",
          "name": "300 g/m² Tintoretto Gesso (gehamerd)",
          "nullable": false
        },
        {
          "slug": "280gr_linnen",
          "name": "280 g/m² Constellation Snow (linnenpers)",
          "nullable": false
        },
        {
          "slug": "280gr_kraft",
          "name": "280 g/m² kraft bruin",
          "nullable": false
        },
        {
          "slug": "540gr_two_layer_multiloft_kraft",
          "name": "540 g/m² MultiLoft® Speckletone kraft",
          "nullable": false
        },
        {
          "slug": "810gr_three_layer_multiloft_kraft",
          "name": "810 g/m² MultiLoft® Speckletone kraft",
          "nullable": false
        },
        {
          "slug": "300gr_metallic_white",
          "name": "300 g/m² Sirio metallic wit",
          "nullable": false
        },
        {
          "slug": "300gr_metallic_pearl",
          "name": "300 g/m² Sirio metallic parelmoer",
          "nullable": false
        },
        {
          "slug": "350gr_metallic_white",
          "name": "350 g/m² Sirio metallic wit",
          "nullable": false
        },
        {
          "slug": "300gr_metallic_silver",
          "name": "300 g/m² Sirio metallic zilver",
          "nullable": false
        },
        {
          "slug": "300gr_metallic_gold",
          "name": "300 g/m² Sirio metallic goud",
          "nullable": false
        },
        {
          "slug": "1gr_multiloft",
          "name": "MultiLoft®",
          "nullable": false
        },
        {
          "slug": "multiloft_kraft",
          "name": "Multiloft kraft dekvellen (gekleurde kern)",
          "nullable": false
        },
        {
          "slug": "200gr_yupo",
          "name": "158 g/m² YUPOBlue® - scheurvast, waterproof",
          "nullable": false
        },
        {
          "slug": "300gr_yupo_blue_ypi",
          "name": "234 g/m² YUPOBlue® - scheurvast, waterproof",
          "nullable": false
        },
        {
          "slug": "250gr_sirio_materica_clay",
          "name": "250 g/m² Materica Clay",
          "nullable": false
        },
        {
          "slug": "290gr_sirio_color_pietra",
          "name": "290 g/m² Sirio Color Pietra",
          "nullable": false
        },
        {
          "slug": "290gr_sirio_color_nero",
          "name": "290 g/m² Sirio Color Nero",
          "nullable": false
        },
        {
          "slug": "295gr_paperwise_earth_pact_natural",
          "name": "295 g/m² Paperwise® Earth Pact Natural",
          "nullable": false
        },
        {
          "slug": "400gr_yupo",
          "name": "319 g/m² YUPOBlue® - scheurvast, waterproof",
          "nullable": false
        },
        {
          "slug": "300gr_synaps",
          "name": "300 g/m² Synaps® - scheurvast, waterproof",
          "nullable": false
        },
        {
          "slug": "300gr_conqueror_vergé_(crème)_high_white",
          "name": "300 g/m² Conqueror vergé naturel - high white",
          "nullable": false
        },
        {
          "slug": "300gr_conqueror_vergé_diamond_white",
          "name": "300 g/m² Conqueror vergé wit - diamond white",
          "nullable": false
        },
        {
          "slug": "300gr_hvo_nk",
          "name": "300 g/m² hvo offset natuurkarton",
          "nullable": false
        },
        {
          "slug": "350gr_hvo",
          "name": "350 g/m² hvo offset",
          "nullable": false
        },
        {
          "slug": "350gr_hvo_nk",
          "name": "350 g/m² hvo offset natuurkarton",
          "nullable": false
        },
        {
          "slug": "400gr_hvo_nk",
          "name": "400 g/m² hvo offset natuurkarton",
          "nullable": false
        },
        {
          "slug": "300gr_sbs_symbol_card",
          "name": "300 g/m² Symbol Card eenzijdig gestreken sulfaatkarton",
          "nullable": false
        },
        {
          "slug": "300gr_sbs",
          "name": "300 g/m² MultiCard® eenzijdig gestreken sulfaatkarton",
          "nullable": false
        },
        {
          "slug": "350gr_sbs",
          "name": "350 g/m² MultiCard® eenzijdig gestreken sulfaatkarton",
          "nullable": false
        },
        {
          "slug": "350gr_sbs_invercote",
          "name": "350 g/m² Invercote® eenzijdig gestreken sulfaatkarton",
          "nullable": false
        },
        {
          "slug": "400gr_sbd",
          "name": "400 g/m² MultiCard® tweezijdig gestreken sulfaatkarton",
          "nullable": false
        },
        {
          "slug": "500gr_sbd",
          "name": "500 g/m² MultiCard® tweezijdig gestreken sulfaatkarton",
          "nullable": false
        },
        {
          "slug": "300gr_recystar",
          "name": "300 g/m² BalancePure®",
          "nullable": false
        },
        {
          "slug": "300gr_recystar_nature",
          "name": "300 g/m² RecyStar® Nature",
          "nullable": false
        },
        {
          "slug": "300gr_cotton_max_white",
          "name": "300 g/m² Gmund Cotton Max White",
          "nullable": false
        },
        {
          "slug": "300gr_cotton_linen_cream",
          "name": "300 g/m² Gmund Cotton Linen Cream",
          "nullable": false
        },
        {
          "slug": "300gr_cotton_new_grey",
          "name": "300 g/m² Gmund Cotton New Grey",
          "nullable": false
        },
        {
          "slug": "300gr_cotton_gentlemen_blue",
          "name": "300 g/m² Gmund Cotton Gentlemen Blue",
          "nullable": false
        },
        {
          "slug": "480gr_two_layer_multiloft_ultra_white",
          "name": "480 g/m² MultiLoft® UltraWhite",
          "nullable": false
        },
        {
          "slug": "480gr_two_layer_multiloft_white",
          "name": "480 g/m² MultiLoft® White",
          "nullable": false
        },
        {
          "slug": "540gr_two_layer_multiloft_black",
          "name": "540 g/m² MultiLoft® Black Licorice",
          "nullable": false
        },
        {
          "slug": "750gr_three_layer_multiloft_ultra_white",
          "name": "750 g/m² MultiLoft® UltraWhite",
          "nullable": false
        },
        {
          "slug": "750gr_three_layer_multiloft_white",
          "name": "750 g/m² MultiLoft® White",
          "nullable": false
        },
        {
          "slug": "810gr_three_layer_multiloft_black",
          "name": "810 g/m² MultiLoft® Black Licorice",
          "nullable": false
        }
      ]
    },
    {
      "slug": "finish",
      "title": "All-over veredeling",
      "locked": false,
      "options": [
        {
          "slug": "geen",
          "name": "Geen",
          "nullable": true
        },
        {
          "slug": "single_sided_gloss_lamination",
          "name": "Enkelzijdig glanslaminaat",
          "description": "Enkelzijdig glanslaminaat",
          "nullable": false
        },
        {
          "slug": "single_sided_matt_lamination",
          "name": "Enkelzijdig matlaminaat",
          "description": "Enkelzijdig matlaminaat",
          "nullable": false
        },
        {
          "slug": "double_sided_gloss_lamination",
          "name": "Dubbelzijdig glanslaminaat",
          "description": "Dubbelzijdig glanslaminaat",
          "nullable": false
        },
        {
          "slug": "double_sided_matt_lamination",
          "name": "Dubbelzijdig matlaminaat",
          "description": "Dubbelzijdig matlaminaat",
          "nullable": false
        },
        {
          "slug": "single_soft_touch_lamination",
          "name": "Enkelzijdig softtouch matlaminaat",
          "description": "Enkelzijdig softtouch matlaminaat",
          "nullable": false
        },
        {
          "slug": "double_soft_touch_lamination",
          "name": "Dubbelzijdig softtouch matlaminaat",
          "description": "Dubbelzijdig softtouch matlaminaat",
          "nullable": false
        },
        {
          "slug": "single_sided_scratch_resistant_laminate",
          "name": "Enkelzijdig krasvast matlaminaat",
          "description": "Enkelzijdig krasvast matlaminaat",
          "nullable": false
        },
        {
          "slug": "double_sided_scratch_resistant_laminate",
          "name": "Dubbelzijdig krasvast matlaminaat",
          "nullable": false
        },
        {
          "slug": "single_sided_uv_coating_gloss",
          "name": "Enkelzijdig hoogglans uv-lak all over ",
          "description": "Enkelzijdig hoogglans uv-lak all over ",
          "nullable": false
        },
        {
          "slug": "single_sided_linen_lamination",
          "name": "Enkelzijdig linnenlaminaat",
          "nullable": false
        },
        {
          "slug": "double_sided_linen_lamination",
          "name": "Dubbelzijdig linnenlaminaat",
          "nullable": false
        }
      ]
    },
    {
      "slug": "spot_finish",
      "title": "Spot veredeling -  uv-lak",
      "locked": false,
      "options": [
        {
          "slug": "none",
          "name": "Geen",
          "nullable": true
        },
        {
          "slug": "double_sided_partial_gloss",
          "name": "Dubbelzijdig hoogglans uv-lak spot",
          "nullable": false
        },
        {
          "slug": "single_sided_partial_gloss",
          "name": "Enkelzijdig hoogglans uv-lak spot",
          "nullable": false
        },
        {
          "slug": "single_sided_embossed_partial_gloss_40",
          "name": "Enkelzijdig opdikkend hoogglans uv-lak spot (40 μm)",
          "nullable": false
        },
        {
          "slug": "single_sided_embossed_partial_gloss_80",
          "name": "Enkelzijdig extra opdikkend hoogglans uv-lak spot (80 μm)",
          "nullable": false
        },
        {
          "slug": "double_sided_embossed_partial_gloss_40",
          "name": "Dubbelzijdig opdikkend hoogglans uv-lak spot (40 μm)",
          "nullable": false
        },
        {
          "slug": "double_sided_embossed_partial_gloss_80",
          "name": "Dubbelzijdig extra opdikkend hoogglans uv-lak spot (80 μm)",
          "nullable": false
        }
      ]
    },
    {
      "slug": "spot_foil",
      "title": "Spot veredeling -  foliedruk",
      "locked": false,
      "options": [
        {
          "slug": "single_sided_foil_gold",
          "name": "Enkelzijdig foliedruk goud ",
          "nullable": false
        },
        {
          "slug": "single_sided_foil_silver",
          "name": "Enkelzijdig foliedruk zilver",
          "nullable": false
        },
        {
          "slug": "single_sided_foil_copper",
          "name": "Enkelzijdig foliedruk koper",
          "nullable": false
        },
        {
          "slug": "single_sided_foil_rose",
          "name": "Enkelzijdig foliedruk roségoud",
          "nullable": false
        },
        {
          "slug": "single_sided_foil_rainbow",
          "name": "Enkelzijdig foliedruk regenboog",
          "nullable": false
        },
        {
          "slug": "single_sided_foil_glitter",
          "name": "Enkelzijdig foliedruk glitter",
          "nullable": false
        },
        {
          "slug": "double_sided_foil_gold",
          "name": "Dubbelzijdig foliedruk goud",
          "nullable": false
        },
        {
          "slug": "double_sided_foil_silver",
          "name": "Dubbelzijdig foliedruk zilver",
          "nullable": false
        },
        {
          "slug": "double_sided_foil_copper",
          "name": "Dubbelzijdig foliedruk koper",
          "nullable": false
        },
        {
          "slug": "double_sided_foil_rose",
          "name": "Dubbelzijdig foliedruk roségoud",
          "nullable": false
        },
        {
          "slug": "double_sided_foil_rainbow",
          "name": "Dubbelzijdig foliedruk regenboog",
          "nullable": false
        },
        {
          "slug": "double_sided_foil_glitter",
          "name": "Dubbelzijdig foliedruk glitter",
          "nullable": false
        },
        {
          "slug": "none",
          "name": "Geen",
          "nullable": true
        },
        {
          "slug": "sigle_sided_cold_foil",
          "name": "Enkelzijdig coldfoil",
          "nullable": false
        }
      ]
    },
    {
      "slug": "copies",
      "title": "Aantal",
      "locked": false,
      "options": [
        {
          "slug": "25",
          "name": "25",
          "nullable": false,
          "type": "digital"
        },
        {
          "slug": "50",
          "name": "50",
          "nullable": false,
          "type": "digital"
        },
        {
          "slug": "100",
          "name": "100",
          "nullable": false,
          "type": "digital"
        },
        {
          "slug": 250,
          "name": "250",
          "nullable": false,
          "type": "digital"
        },
        {
          "slug": 500,
          "name": "500",
          "nullable": false,
          "type": "digital"
        },
        {
          "slug": 1000,
          "name": "1000",
          "nullable": false,
          "type": "digital"
        }
      ]
    },
    {
      "slug": "clean_cut",
      "title": "Schoonsnijden",
      "locked": true,
      "options": [
        {
          "slug": "yes",
          "name": "Schoonsnijden",
          "description": "Schoonsnijden",
          "nullable": false
        },
        {
          "slug": "no",
          "name": "Nee",
          "nullable": true
        }
      ]
    },
    {
      "slug": "personalize",
      "title": "Personaliseren",
      "locked": false,
      "options": [
        {
          "slug": "numbering",
          "name": "Nummeren 1 x",
          "description": "Nummeren 1 x",
          "nullable": false
        },
        {
          "slug": "personalize_from_excel",
          "name": "Vanuit Excel",
          "description": "Personaliseren vanuit Excel",
          "nullable": false
        }
      ]
    },
    {
      "slug": "rounded_corners",
      "title": "Hoeken afronden",
      "locked": false,
      "options": [
        {
          "slug": "3,5_mm_radius",
          "name": "3,5 mm radius",
          "description": "3,5 mm rondhoek",
          "nullable": false
        },
        {
          "slug": "7_mm_radius",
          "name": "7 mm radius",
          "description": "7 mm rondhoek",
          "nullable": false
        }
      ]
    },
    {
      "slug": "drillholes",
      "title": "Boren",
      "locked": false,
      "options": [
        {
          "slug": "one_drillhole_3mm",
          "name": "1 x 3 mm",
          "nullable": false
        },
        {
          "slug": "two_drillholes_3mm",
          "name": "2 x 3 mm",
          "nullable": false
        },
        {
          "slug": "one_drillhole_4mm",
          "name": "1 x 4 mm",
          "nullable": false
        },
        {
          "slug": "two_drillholes_4mm",
          "name": "2 x 4 mm",
          "nullable": false
        },
        {
          "slug": "one_drillhole_5mm",
          "name": "1 x 5 mm",
          "nullable": false
        },
        {
          "slug": "two_drillholes_5mm",
          "name": "2 x 5 mm",
          "nullable": false
        },
        {
          "slug": "one_drillhole",
          "name": "1 x 6 mm",
          "description": "1 boorgat 6 mm",
          "nullable": false
        },
        {
          "slug": "two_drillholes",
          "name": "2 x 6 mm",
          "description": "2 boorgaten 6 mm",
          "nullable": false
        }
      ]
    },
    {
      "slug": "variable_creasing_line",
      "title": "Rillijnen",
      "locked": false,
      "options": [
        {
          "slug": "1",
          "name": "1 rillijn",
          "nullable": false
        },
        {
          "slug": "2",
          "name": "2 rillijnen",
          "nullable": false
        },
        {
          "slug": "3",
          "name": "3 rillijnen",
          "nullable": false
        },
        {
          "slug": "4",
          "name": "4 rillijnen",
          "nullable": false
        },
        {
          "slug": "5",
          "name": "5 rillijnen",
          "nullable": false
        }
      ]
    },
    {
      "slug": "die_cut",
      "title": "Eigen vorm (die cut)",
      "locked": false,
      "options": [
        {
          "slug": "yes",
          "name": "Ja",
          "description": "eigen vorm",
          "nullable": false
        },
        {
          "slug": "no",
          "name": "Nee",
          "nullable": true
        }
      ]
    },
    {
      "slug": "perforation",
      "title": "Perforeren",
      "locked": false,
      "options": [
        {
          "slug": "1_perforation_line",
          "name": "1 perforatielijn",
          "nullable": false
        }
      ]
    },
    {
      "slug": "businesscard_creasing",
      "title": "Rillen",
      "locked": true,
      "options": [
        {
          "slug": "yes",
          "name": "rillen",
          "nullable": false
        },
        {
          "slug": "no",
          "name": "niet rillen",
          "nullable": true
        }
      ]
    },
    {
      "slug": "bundle",
      "title": "Aftellen en bundelen",
      "locked": false,
      "options": [
        {
          "slug": "bundle_per_100",
          "name": "per 100",
          "description": "Bundelen per 100",
          "nullable": false
        },
        {
          "slug": "bundle_per_250",
          "name": "per 250",
          "description": "Bundelen per 250",
          "nullable": false
        },
        {
          "slug": "bundle_per_500",
          "name": "per 500",
          "description": "Bundelen per 500",
          "nullable": false
        }
      ]
    },
    {
      "slug": "folded",
      "title": "Gevouwen",
      "locked": true,
      "options": [
        {
          "slug": "no",
          "name": "Plano geleverd",
          "description": "Plano geleverd (ongevouwen)",
          "nullable": false
        },
        {
          "slug": "yes",
          "name": "Gevouwen geleverd",
          "description": "Gevouwen geleverd",
          "nullable": false
        }
      ]
    },
    {
      "slug": "urgency",
      "title": "Urgentie",
      "locked": false,
      "options": [
        {
          "slug": "quick",
          "name": "Snel",
          "nullable": false
        },
        {
          "slug": "standard",
          "name": "Standaard",
          "nullable": false
        },
        {
          "slug": "urgent",
          "name": "Spoed",
          "nullable": false
        }
      ]
    },
    {
      "slug": "printingmethod",
      "title": "Print methode",
      "locked": false,
      "options": [
        {
          "slug": "digital",
          "name": "Digitaal",
          "description": "HP Indigo digitaal",
          "nullable": false
        },
        {
          "slug": "offset",
          "name": "Offset",
          "description": "Offset",
          "nullable": false
        }
      ]
    }
  ],
  "maxDesigns": 50,
  "bleed": 2,
  "excludes": [
    [
      {
        "options": [
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "sigle_sided_cold_foil",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_two_foils",
          "group_double_sided_spot-uv_plus_foil",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "geen"
        ],
        "property": "finish"
      },
      {
        "options": [
          "350gr_hvo",
          "300gr_hvo",
          "540gr_two_layer_multiloft_kraft",
          "480gr_two_layer_multiloft_ultra_white",
          "540gr_two_layer_multiloft_black",
          "480gr_two_layer_multiloft_white",
          "810gr_three_layer_multiloft_kraft",
          "810gr_three_layer_multiloft_black",
          "750gr_three_layer_multiloft_white",
          "750gr_three_layer_multiloft_ultra_white"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "geen",
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "single_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate",
          "single_sided_uv_coating_gloss",
          "single_sided_uv_coating_matt",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      },
      {
        "options": [
          "350gr_hvo",
          "300gr_hvo",
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "400gr_hvo_nk"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "350gr_sbs",
          "350gr_sbs_invercote",
          "300gr_sbs_symbol_card"
        ],
        "property": "material"
      },
      {
        "options": [
          "double_sided_gloss_lamination",
          "double_sided_matt_lamination",
          "double_soft_touch_lamination",
          "double_sided_scratch_resistant_laminate",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_embossed_partial_gloss_40",
          "single_sided_embossed_partial_gloss_40",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "300gr_recycled",
          "300gr_metallic_white",
          "350gr_metallic_white",
          "300gr_metallic_pearl",
          "300gr_metallic_silver",
          "300gr_metallic_gold",
          "280gr_kraft",
          "381gr_kraft",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "250gr_sirio_materica_clay",
          "290gr_sirio_color_pietra",
          "290gr_sirio_color_nero",
          "500gr_sbd",
          "400gr_yupo",
          "295gr_paperwise_earth_pact_natural",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "200gr_yupo",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_cotton_max_white",
          "300gr_cotton_linen_cream",
          "300gr_cotton_new_grey",
          "300gr_cotton_gentlemen_blue"
        ],
        "property": "material"
      },
      {
        "options": [
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "group_foils",
          "coldfoil",
          "sigle_sided_cold_foil",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_double_sided_spot-uv_plus_foil",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_sbs_symbol_card",
          "350gr_sbs",
          "350gr_sbs_invercote"
        ],
        "property": "material"
      },
      {
        "options": [
          "double_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "single_sided_embossed_partial_gloss_40",
          "single_sided_partial_gloss",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_double_sided_spot-uv_plus_foil",
          "sigle_sided_cold_foil",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "single_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate"
        ],
        "property": "finish"
      },
      {
        "options": [
          "double_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "250gr_tintoretto_gesso",
          "280gr_constalations_snow_(linnen)",
          "280gr_kraftpapier",
          "300gr_ice_silver_metallic",
          "300gr_kraftpapier",
          "280gr_kraft",
          "381gr_kraft",
          "280gr_linnen",
          "300gr_tintoretto_gesso",
          "250gr_sirio_materica_clay",
          "290gr_sirio_color_pietra",
          "290gr_sirio_color_nero",
          "300gr_recycled",
          "295gr_paperwise_earth_pact_natural",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_cotton_max_white",
          "300gr_cotton_linen_cream",
          "300gr_cotton_new_grey",
          "300gr_cotton_gentlemen_blue",
          "540gr_two_layer_multiloft_black",
          "810gr_three_layer_multiloft_black"
        ],
        "property": "material"
      },
      {
        "options": [
          "single_sided_gloss_lamination",
          "double_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_matt_lamination",
          "double_sided_uv_coating",
          "single_soft_touch_lamination",
          "double_soft_touch_lamination",
          "double_sided_scratch_resistant_laminate",
          "single_sided_scratch_resistant_laminate",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "250gr_tintoretto_gesso",
          "280gr_constalations_snow_(linnen)",
          "280gr_kraftpapier",
          "300gr_ice_silver_metallic",
          "300gr_kraftpapier",
          "500gr_sbd",
          "280gr_kraft",
          "381gr_kraft",
          "300gr_tintoretto_gesso",
          "280gr_linnen",
          "300gr_metallic_white",
          "350gr_metallic_white",
          "300gr_metallic_pearl",
          "300gr_metallic_gold",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "350gr_sbs",
          "760gr_pvc",
          "300gr_gesatineerd_mc",
          "350gr_gesatineerd_mc",
          "350gr_silk_mc",
          "300gr_metallic_silver",
          "250gr_sirio_materica_clay",
          "290gr_sirio_color_pietra",
          "290gr_sirio_color_nero",
          "400gr_sbd",
          "400gr_yupo",
          "295gr_paperwise_earth_pact_natural",
          "300gr_silk_mc",
          "200gr_yupo",
          "350gr_hvo_nk",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_sbs_symbol_card",
          "300gr_cotton_gentlemen_blue",
          "300gr_cotton_new_grey",
          "300gr_cotton_linen_cream",
          "300gr_cotton_max_white",
          "540gr_two_layer_multiloft_kraft",
          "480gr_two_layer_multiloft_ultra_white",
          "480gr_two_layer_multiloft_white",
          "540gr_two_layer_multiloft_black",
          "810gr_three_layer_multiloft_kraft",
          "810gr_three_layer_multiloft_black",
          "750gr_three_layer_multiloft_white",
          "750gr_three_layer_multiloft_ultra_white",
          "350gr_hvo",
          "300gr_sbs",
          "350gr_sbs_invercote",
          "400gr_hvo_nk"
        ],
        "property": "material"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "digital"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "10",
          "20",
          "30",
          "11",
          "22",
          "33"
        ],
        "property": "printtype"
      }
    ],
    [
      {
        "options": [
          "single_4",
          "singlehorizontal_4"
        ],
        "property": "fold"
      },
      {
        "options": [
          "500gr_sbd",
          "540gr_two_layer_multiloft_kraft",
          "480gr_two_layer_multiloft_ultra_white",
          "480gr_two_layer_multiloft_white",
          "540gr_two_layer_multiloft_black",
          "810gr_three_layer_multiloft_kraft",
          "810gr_three_layer_multiloft_black",
          "750gr_three_layer_multiloft_white",
          "750gr_three_layer_multiloft_ultra_white"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "350gr_sbs",
          "350gr_sbd",
          "350gr_sbs_invercote"
        ],
        "property": "material"
      },
      {
        "options": [
          "double_sided_matt_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "50_full_color_plus_white",
          "55_full_color_plus_white"
        ],
        "property": "printtype"
      },
      {
        "options": [
          "300gr_gesatineerd_mc",
          "350gr_gesatineerd_mc",
          "300gr_silk_mc",
          "400gr_gesatineerd_mc",
          "350gr_silk_mc",
          "400gr_silk_mc",
          "300gr_recycled",
          "300gr_biotop",
          "300gr_sbs",
          "350gr_sbd",
          "500gr_sbd",
          "300gr_tintoretto_gesso",
          "280gr_linnen",
          "300gr_metallic_white",
          "350gr_metallic_white",
          "300gr_metallic_pearl",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "400gr_sbd",
          "400gr_yupo",
          "295gr_paperwise_earth_pact_natural",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "200gr_yupo",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_sbs_symbol_card",
          "350gr_sbs",
          "400gr_hvo_nk"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "50_full_color_plus_white",
          "55_full_color_plus_white"
        ],
        "property": "printtype"
      }
    ],
    [
      {
        "options": [
          "290gr_sirio_color_nero",
          "540gr_two_layer_multiloft_black",
          "810gr_three_layer_multiloft_black"
        ],
        "property": "material"
      },
      {
        "options": [
          "44",
          "40"
        ],
        "property": "printtype"
      }
    ],
    [
      {
        "options": [
          "10",
          "20",
          "30",
          "11",
          "22",
          "33"
        ],
        "property": "printtype"
      },
      {
        "options": [
          "300gr_gesatineerd_mc",
          "350gr_gesatineerd_mc",
          "300gr_silk_mc",
          "350gr_silk_mc",
          "300gr_sbs_symbol_card",
          "400gr_gesatineerd_mc",
          "400gr_silk_mc"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_gloss_lamination",
          "soft_touch",
          "single_soft_touch_lamination",
          "double_soft_touch_lamination",
          "geen",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination",
          "single_sided_scratch_resistant_laminate",
          "double_sided_scratch_resistant_laminate",
          "single_sided_uv_coating_gloss",
          "single_sided_uv_coating_matt"
        ],
        "property": "finish"
      },
      {
        "options": [
          "double_sided_partial_gloss",
          "single_sided_partial_gloss"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "double_soft_touch_lamination",
          "single_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate",
          "double_sided_scratch_resistant_laminate",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "sigle_sided_cold_foil"
        ],
        "property": "spot_foil"
      },
      {
        "options": [
          "digital"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "sigle_sided_cold_foil"
        ],
        "property": "spot_foil"
      },
      {
        "options": [
          "300gr_silk_mc"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "33",
          "22",
          "11",
          "30",
          "20",
          "10"
        ],
        "property": "printtype"
      },
      {
        "options": [
          "group_partial_gloss",
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "group_foils",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "coldfoil",
          "double_sided_cold_foil",
          "sigle_sided_cold_foil",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_double_sided_spot-uv_plus_foil",
          "group_two_foils",
          "double_sided_embossed_partial_gloss_80",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_foil_glitter",
          "double_sided_foil_rainbow",
          "double_sided_foil_black",
          "double_sided_foil_rose",
          "single_sided_foil_glitter",
          "single_sided_foil_rainbow",
          "single_sided_foil_black",
          "single_sided_foil_rose",
          "double_sided_foil"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "numbering",
          "personalize_from_excel"
        ],
        "property": "personalize"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "sigle_sided_cold_foil"
        ],
        "property": "spot_foil"
      },
      {
        "options": [
          "single_sided_gloss_lamination",
          "double_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_matt_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "sigle_sided_cold_foil"
        ],
        "property": "spot_foil"
      },
      {
        "options": [
          "laminaat",
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_gloss_lamination",
          "double_sided_matt_lamination",
          "single_soft_touch_lamination",
          "soft_touch",
          "double_soft_touch_lamination",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "numbering",
          "personalize_from_excel"
        ],
        "property": "personalize"
      },
      {
        "options": [
          "sigle_sided_cold_foil"
        ],
        "property": "spot_foil"
      }
    ],
    [
      {
        "options": [
          "bundle_per_100",
          "bundle_per_500",
          "bundle_per_250"
        ],
        "property": "bundle"
      },
      {
        "options": [
          "sigle_sided_cold_foil"
        ],
        "property": "spot_foil"
      }
    ],
    [
      {
        "options": [
          "single_sided_partial_gloss",
          "double_sided_partial_gloss",
          "sigle_sided_cold_foil"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "300gr_gesatineerd_mc",
          "350gr_gesatineerd_mc",
          "400gr_gesatineerd_mc",
          "300gr_silk_mc",
          "350gr_silk_mc",
          "300gr_recycled",
          "300gr_biotop",
          "400gr_sbd",
          "500gr_sbd",
          "300gr_tintoretto_gesso",
          "280gr_linnen",
          "280gr_kraft",
          "381gr_kraft",
          "300gr_metallic_white",
          "350gr_metallic_white",
          "300gr_metallic_pearl",
          "300gr_metallic_silver",
          "300gr_metallic_gold",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "250gr_sirio_materica_clay",
          "290gr_sirio_color_pietra",
          "295gr_paperwise_earth_pact_natural",
          "290gr_sirio_color_nero",
          "400gr_yupo",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "200gr_yupo",
          "400gr_hvo_nk"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_gloss_lamination"
        ],
        "property": "finish"
      },
      {
        "options": [
          "400gr_silk_mc"
        ],
        "property": "material"
      },
      {
        "options": [
          "none"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "300gr_silk_mc",
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "300gr_biotop",
          "400gr_hvo_nk"
        ],
        "property": "material"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_gloss_lamination",
          "double_sided_matt_lamination",
          "single_soft_touch_lamination",
          "double_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate",
          "double_sided_scratch_resistant_laminate",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "400gr_yupo",
          "500gr_sbd",
          "200gr_yupo"
        ],
        "property": "material"
      },
      {
        "options": [
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_double_sided_spot-uv_plus_foil",
          "group_two_foils",
          "single_sided_foil_rose",
          "single_sided_foil_black",
          "single_sided_foil_rainbow",
          "single_sided_foil_glitter",
          "double_sided_foil_rose",
          "double_sided_foil_black",
          "double_sided_foil_rainbow",
          "double_sided_foil_glitter",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_foil_glitter",
          "double_sided_foil_rainbow",
          "double_sided_foil_black",
          "double_sided_foil_rose",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "single_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate",
          "single_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "yes"
        ],
        "property": "die_cut"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "yes"
        ],
        "property": "die_cut"
      },
      {
        "options": [
          "295gr_paperwise_earth_pact_natural",
          "290gr_sirio_color_nero",
          "290gr_sirio_color_pietra",
          "250gr_sirio_materica_clay",
          "350gr_yupo_blue_ypi",
          "300gr_yupo_blue_ypi",
          "500gr_sbd",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "220gr_verge_naturel",
          "220gr_verge_white",
          "200gr_yupo",
          "300gr_cotton_max_white",
          "300gr_cotton_new_grey",
          "300gr_cotton_linen_cream",
          "300gr_cotton_gentlemen_blue"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "300gr_sbs_symbol_card"
        ],
        "property": "material"
      },
      {
        "options": [
          "double_sided_scratch_resistant_laminate",
          "single_sided_scratch_resistant_laminate",
          "scratch_resistant",
          "double_soft_touch_lamination",
          "single_soft_touch_lamination",
          "double_sided_matt_lamination",
          "double_sided_gloss_lamination"
        ],
        "property": "finish"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "500gr_sbd"
        ],
        "property": "material"
      },
      {
        "options": [
          "double_sided_gloss_lamination",
          "double_sided_matt_lamination",
          "single_sided_matt_lamination",
          "single_sided_gloss_lamination",
          "single_soft_touch_lamination",
          "double_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate",
          "double_sided_scratch_resistant_laminate",
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "single_4",
          "singlehorizontal_4"
        ],
        "property": "fold"
      },
      {
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "property": "variable_creasing_line"
      }
    ],
    [
      {
        "options": [
          "1",
          "2",
          "4",
          "3",
          "5"
        ],
        "property": "variable_creasing_line"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "single_sided_uv_coating_gloss",
          "single_sided_uv_coating_matt"
        ],
        "property": "finish"
      },
      {
        "options": [
          "280gr_kraft",
          "381gr_kraft",
          "300gr_metallic_white",
          "300gr_gesatineerd_mc",
          "350gr_gesatineerd_mc",
          "400gr_gesatineerd_mc",
          "300gr_silk_mc",
          "350gr_silk_mc",
          "400gr_silk_mc",
          "300gr_biotop",
          "300gr_tintoretto_gesso",
          "280gr_linnen",
          "350gr_metallic_white",
          "300gr_metallic_pearl",
          "300gr_metallic_silver",
          "300gr_metallic_gold",
          "200gr_yupo",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "250gr_sirio_materica_clay",
          "290gr_sirio_color_pietra",
          "290gr_sirio_color_nero",
          "295gr_paperwise_earth_pact_natural",
          "400gr_yupo",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "300gr_sbs",
          "400gr_sbd",
          "500gr_sbd",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_cotton_max_white",
          "300gr_cotton_linen_cream",
          "300gr_cotton_new_grey",
          "300gr_cotton_gentlemen_blue",
          "540gr_two_layer_multiloft_kraft",
          "480gr_two_layer_multiloft_ultra_white",
          "480gr_two_layer_multiloft_white",
          "540gr_two_layer_multiloft_black",
          "810gr_three_layer_multiloft_black",
          "750gr_three_layer_multiloft_white",
          "750gr_three_layer_multiloft_ultra_white",
          "810gr_three_layer_multiloft_kraft",
          "350gr_sbs",
          "350gr_sbs_invercote",
          "350gr_hvo",
          "400gr_hvo_nk",
          "300gr_synaps"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "300gr_sbs_symbol_card",
          "350gr_sbs"
        ],
        "property": "material"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "single_sided_gloss_lamination",
          "single_sided_matt_lamination",
          "double_sided_gloss_lamination",
          "double_sided_matt_lamination",
          "single_soft_touch_lamination",
          "double_soft_touch_lamination",
          "scratch_resistant",
          "single_sided_scratch_resistant_laminate",
          "double_sided_scratch_resistant_laminate"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "300gr_gesatineerd_mc"
        ],
        "property": "material"
      },
      {
        "options": [
          "custom:width:150-180",
          "custom:height:150-180"
        ],
        "property": "size"
      }
    ],
    [
      {
        "options": [
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "group_partial_gloss",
          "group_foils",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "sigle_sided_cold_foil",
          "double_sided_foil_copper",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_two_foils",
          "group_double_sided_spot-uv_plus_foil",
          "coldfoil",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "geen",
          "single_sided_uv_coating_matt",
          "single_sided_uv_coating_gloss"
        ],
        "property": "finish"
      },
      {
        "options": [
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "540gr_two_layer_multiloft_kraft",
          "480gr_two_layer_multiloft_ultra_white",
          "480gr_two_layer_multiloft_white",
          "540gr_two_layer_multiloft_black",
          "810gr_three_layer_multiloft_kraft",
          "810gr_three_layer_multiloft_black",
          "750gr_three_layer_multiloft_white",
          "750gr_three_layer_multiloft_ultra_white",
          "400gr_hvo_nk"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "bc_plus",
          "bc_plus_portrait"
        ],
        "property": "size"
      },
      {
        "options": [
          "400gr_silk_mc"
        ],
        "property": "material"
      },
      {
        "options": [
          "3,5_mm_radius"
        ],
        "property": "rounded_corners"
      }
    ],
    [
      {
        "options": [
          17000,
          18000,
          19000,
          20000,
          16000,
          22500,
          25000,
          27500,
          30000,
          32500,
          35000,
          37500,
          40000,
          42500,
          45000,
          47500,
          50000,
          52500,
          55000,
          57500,
          60000,
          62500,
          65000,
          67500,
          70000,
          72500,
          75000,
          77500,
          80000,
          82500,
          85000,
          87500,
          90000,
          92500,
          95000,
          97500,
          100000,
          105000,
          110000,
          115000,
          120000,
          125000,
          130000,
          135000,
          140000,
          145000
        ],
        "property": "copies"
      },
      {
        "options": [
          "1_perforation_line"
        ],
        "property": "perforation"
      }
    ],
    [
      {
        "options": [
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_40",
          "group_partial_gloss",
          "group_foils",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "sigle_sided_cold_foil",
          "single_sided_partial_gloss_plus_foil_gold",
          "single_sided_partial_gloss_plus_foil_silver",
          "single_sided_partial_gloss_plus_foil_copper",
          "single_sided_embossed_partial_gloss_40_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_gold",
          "single_sided_embossed_partial_gloss_40_plus_foil_copper",
          "double_sided_partial_gloss_plus_foil_silver",
          "double_sided_partial_gloss_plus_foil_copper",
          "double_sided_embossed_partial_gloss_40_plus_foil_gold",
          "double_sided_embossed_partial_gloss_40_plus_foil_silver",
          "double_sided_embossed_partial_gloss_40_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_silver_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "group_single_sided_spot-uv_plus_foil",
          "group_two_foils",
          "double_sided_embossed_partial_gloss_80",
          "group_double_sided_spot-uv_plus_foil",
          "single_sided_foil_rose",
          "single_sided_foil_black",
          "single_sided_foil_rainbow",
          "single_sided_foil_glitter",
          "double_sided_foil_rose",
          "double_sided_foil_black",
          "double_sided_foil_rainbow",
          "double_sided_foil_glitter",
          "single_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "540gr_two_layer_multiloft_kraft",
          "810gr_three_layer_multiloft_kraft",
          "480gr_two_layer_multiloft_ultra_white",
          "480gr_two_layer_multiloft_white",
          "540gr_two_layer_multiloft_black",
          "750gr_three_layer_multiloft_ultra_white",
          "750gr_three_layer_multiloft_white",
          "810gr_three_layer_multiloft_black"
        ],
        "property": "material"
      },
      {
        "options": [
          "single_sided_linen_lamination",
          "double_sided_linen_lamination"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "single_sided_embossed_partial_gloss_40",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "single_sided_foil_rainbow",
          "double_sided_foil_gold",
          "single_sided_foil_glitter",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "single_sided_foil_rose",
          "single_sided_foil_copper",
          "single_sided_foil_silver",
          "single_sided_foil_gold",
          "double_sided_foil_rose",
          "double_sided_foil_rainbow",
          "double_sided_foil_glitter",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_silver_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_copper"
        ],
        "property": "spot_foil"
      }
    ],
    [
      {
        "options": [
          "220gr_conqueror_vergé_diamond_white",
          "220gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "295gr_paperwise_earth_pact_natural",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_cotton_max_white",
          "300gr_cotton_linen_cream",
          "300gr_cotton_new_grey",
          "300gr_cotton_gentlemen_blue",
          "500gr_sbd"
        ],
        "property": "material"
      },
      {
        "options": [
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "single_sided_foil_rose",
          "single_sided_foil_rainbow",
          "single_sided_foil_glitter",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_foil_rose",
          "double_sided_foil_rainbow",
          "double_sided_foil_glitter",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper"
        ],
        "property": "spot_foil"
      }
    ],
    [
      {
        "options": [
          "300gr_biotop",
          "300gr_hvo",
          "350gr_hvo",
          "300gr_hvo_nk",
          "350gr_hvo_nk",
          "540gr_two_layer_multiloft_kraft",
          "810gr_three_layer_multiloft_kraft",
          "381gr_kraft",
          "280gr_kraft",
          "290gr_sirio_color_pietra",
          "290gr_sirio_color_nero",
          "250gr_sirio_materica_clay",
          "295gr_paperwise_earth_pact_natural",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_cotton_linen_cream",
          "300gr_cotton_new_grey",
          "300gr_cotton_gentlemen_blue",
          "300gr_cotton_max_white",
          "480gr_two_layer_multiloft_ultra_white",
          "480gr_two_layer_multiloft_white",
          "540gr_two_layer_multiloft_black",
          "750gr_three_layer_multiloft_ultra_white",
          "750gr_three_layer_multiloft_white",
          "810gr_three_layer_multiloft_black",
          "400gr_hvo_nk"
        ],
        "property": "material"
      },
      {
        "options": [
          "geen"
        ],
        "property": "finish"
      },
      {
        "options": [
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "single_sided_foil_rose",
          "single_sided_foil_rainbow",
          "single_sided_foil_glitter",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_foil_rose",
          "double_sided_foil_rainbow",
          "double_sided_foil_glitter",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "double_sided_foil_silver_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper"
        ],
        "property": "spot_foil"
      }
    ],
    [
      {
        "options": [
          "double_sided_partial_gloss",
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "220gr_conqueror_vergé_diamond_white",
          "220gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_yupo_blue_ypi",
          "350gr_yupo_blue_ypi",
          "500gr_sbd",
          "295gr_paperwise_earth_pact_natural",
          "300gr_recystar",
          "300gr_recystar_nature",
          "300gr_cotton_max_white",
          "300gr_cotton_linen_cream",
          "300gr_cotton_new_grey",
          "300gr_cotton_gentlemen_blue"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "single_sided_partial_gloss",
          "double_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "single_sided_linen_lamination",
          "double_sided_linen_lamination",
          "single_sided_uv_coating_gloss"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_copper",
          "single_sided_foil_rose",
          "single_sided_foil_rainbow",
          "single_sided_foil_glitter",
          "double_sided_foil_gold",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_foil_rose",
          "double_sided_foil_rainbow",
          "double_sided_foil_glitter",
          "double_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_silver",
          "double_sided_foil_silver_plus_foil_copper",
          "single_sided_foil_gold_plus_foil_copper",
          "single_sided_foil_silver_plus_foil_copper"
        ],
        "property": "spot_foil"
      },
      {
        "options": [
          "single_sided_linen_lamination",
          "double_sided_linen_lamination",
          "single_sided_uv_coating_gloss"
        ],
        "property": "finish"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "350gr_hvo",
          "350gr_hvo_nk",
          "400gr_hvo_nk"
        ],
        "property": "material"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      }
    ],
    [
      {
        "options": [
          "double_sided_embossed_partial_gloss_40",
          "double_sided_partial_gloss",
          "double_sided_embossed_partial_gloss_80"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "single_sided_matt_lamination",
          "single_sided_gloss_lamination",
          "single_soft_touch_lamination",
          "single_sided_scratch_resistant_laminate"
        ],
        "property": "finish"
      },
      {
        "options": [
          "300gr_hvo",
          "350gr_hvo",
          "300gr_hvo_nk",
          "300gr_biotop",
          "350gr_hvo_nk",
          "400gr_hvo_nk"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "300gr_sbs",
          "300gr_hvo",
          "300gr_silk_mc",
          "350gr_silk_mc"
        ],
        "property": "material"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "single_sided_partial_gloss",
          "double_sided_partial_gloss"
        ],
        "property": "spot_finish"
      }
    ],
    [
      {
        "options": [
          "single_sided_foil",
          "double_sided_foil",
          "single_sided_foil_gold",
          "single_sided_foil_silver",
          "single_sided_foil_rose",
          "single_sided_foil_copper",
          "single_sided_foil_glitter",
          "single_sided_foil_rainbow",
          "double_sided_foil_silver",
          "double_sided_foil_copper",
          "double_sided_foil_gold",
          "double_sided_foil_glitter",
          "double_sided_foil_rainbow",
          "double_sided_foil_rose"
        ],
        "property": "spot_foil"
      },
      {
        "options": [
          "280gr_linnen"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "businesscard_box"
        ],
        "property": "delivery"
      }
    ],
    [
      {
        "options": [
          "single_sided_partial_gloss",
          "single_sided_embossed_partial_gloss_40",
          "single_sided_embossed_partial_gloss_80",
          "double_sided_embossed_partial_gloss_40",
          "double_sided_embossed_partial_gloss_80",
          "group_single_sided_spot",
          "double_sided_partial_gloss",
          "group_double_sided_spot"
        ],
        "property": "spot_finish"
      },
      {
        "options": [
          "businesscard_box"
        ],
        "property": "delivery"
      }
    ],
    [
      {
        "options": [
          "bundle_per_500",
          "bundle_per_250"
        ],
        "property": "bundle"
      },
      {
        "options": [
          "400gr_silk_mc"
        ],
        "property": "material"
      }
    ],
    [
      {
        "options": [
          "custom:width:85-86",
          "custom:height:55-56"
        ],
        "property": "size"
      },
      {
        "options": [
          "offset"
        ],
        "property": "printingmethod"
      },
      {
        "options": [
          "3,5_mm_radius",
          "7_mm_radius"
        ],
        "property": "rounded_corners"
      }
    ],
    [
      {
        "property": "delivery",
        "options": [
          "businesscard_box"
        ]
      },
      {
        "property": "size",
        "options": [
          "custom:width:25-90",
          "custom:height:25-55"
        ]
      }
    ],
    [
      {
        "property": "rounded_corners",
        "options": [
          "3,5_mm_radius",
          "7_mm_radius"
        ]
      },
      {
        "property": "printingmethod",
        "options": [
          "offset"
        ]
      },
      {
        "property": "material",
        "options": [
          "300gr_biotop",
          "300gr_hvo_nk",
          "300gr_conqueror_vergé_(crème)_high_white",
          "300gr_conqueror_vergé_diamond_white"
        ]
      }
    ],
    [
      {
        "property": "die_cut",
        "options": [
          "yes"
        ]
      },
      {
        "property": "material",
        "options": [
          "200gr_yupo",
          "300gr_yupo_blue_ypi",
          "400gr_yupo"
        ]
      }
    ],
    [
      {
        "property": "material",
        "options": [
          "400gr_hvo_nk",
          null
        ]
      },
      {
        "property": "delivery",
        "options": [
          "businesscard_box"
        ]
      }
    ],
    [
      {
        "property": "fold",
        "options": [
          "no_fold"
        ]
      },
      {
        "property": "size",
        "options": [
          "custom:width:30-460",
          "custom:height:30-460"
        ]
      }
    ],
    [
      {
        "property": "material",
        "options": [
          "400gr_silk_mc"
        ]
      },
      {
        "property": "size",
        "options": [
          "bc_plus_portrait",
          "bc_plus",
          "custom:width:55-85",
          "custom:height:55-85",
          "bc_portrait",
          "bc",
          "custom"
        ]
      },
      {
        "property": "printingmethod",
        "options": [
          "offset"
        ]
      },
      {
        "property": "rounded_corners",
        "options": [
          "7_mm_radius"
        ]
      }
    ],
    [
      {
        "property": "drillholes",
        "options": [
          "one_drillhole_4mm",
          "two_drillholes_4mm",
          "one_drillhole_5mm",
          "two_drillholes_5mm"
        ]
      },
      {
        "property": "printtype",
        "options": [
          "10",
          "20",
          "30",
          "11",
          "22",
          "33"
        ]
      },
      {
        "property": "printingmethod",
        "options": [
          "offset"
        ]
      }
    ]
  ]
}