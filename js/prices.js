const countryPrices = {
    "Australia": {"rein_before": "$540", "rein_after": "$450", "einhorn_before": "$810", "einhorn_after": "$677", "boese_before": "$1355", "boese_after": "$1127"},
    "Austria": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Belgium": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Bulgaria": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Canada": {"rein_before": "$540", "rein_after": "$450", "einhorn_before": "$810", "einhorn_after": "$677", "boese_before": "$1355", "boese_after": "$1127"},
    "China": {"rein_before": "$540", "rein_after": "$450", "einhorn_before": "$810", "einhorn_after": "$677", "boese_before": "$1355", "boese_after": "$1127"},
    "Croatia": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Cyprus": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Czechia": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Denmark": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Estonia": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Finland": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "France": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Germany": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Greece": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Hungary": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Iceland": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "India": {"rein_before": "$540", "rein_after": "$450", "einhorn_before": "$810", "einhorn_after": "$677", "boese_before": "$1355", "boese_after": "$1127"},
    "Ireland": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Italy": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Japan": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Latvia": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Lithuania": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Luxembourg": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Malta": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Netherlands": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Norway": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Portugal": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Poland": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Romania": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Russia": {"rein_before": "$540", "rein_after": "$450", "einhorn_before": "$810", "einhorn_after": "$677", "boese_before": "$1355", "boese_after": "$1127"},
    "Slovakia": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Slovenia": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Spain": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Sweden": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "Switzerland": {"rein_before": "€480", "rein_after": "€399", "einhorn_before": "€718", "einhorn_after": "€599", "boese_before": "€1200", "boese_after": "€999"},
    "United Kingdom": {"rein_before": "£455", "rein_after": "£335", "einhorn_before": "£600", "einhorn_after": "£500", "boese_before": "£1005", "boese_after": "£835"},
    "United States": {"rein_before": "$540", "rein_after": "$450", "einhorn_before": "$810", "einhorn_after": "$680", "boese_before": "$1355", "boese_after": "$1125"}
}