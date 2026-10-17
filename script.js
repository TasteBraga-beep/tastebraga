"use strict";


/* =========================================================
   TASTEBRAGA
   Règle :
   Toute donnée inconnue reste null.
   Aucune valeur restaurant n'est inventée.
========================================================= */


/* =========================================================
   TRADUCTIONS UI
========================================================= */

const translations = {

  fr: {
    brandSubtitle: "Qualité · Prix · Accessibilité",
    language: "Langue",
    district: "District de Braga",

    heroTitle:
      "Où voulez-vous bien manger aujourd’hui ?",

    heroDescription:
      "Trouvez un restaurant selon votre budget, la qualité, l’accessibilité et vos préférences.",

    searchLabel:
      "Restaurant, plat ou envie",

    searchPlaceholder:
      "Ex. bacalhau, restaurant familial, Braga...",

    searchButton:
      "Rechercher",

    aroundMe:
      "Autour de moi",

    locating:
      "Recherche de votre position…",

    locationGranted:
      "Position détectée.",

    locationDenied:
      "Localisation non disponible. Vous pouvez continuer sans géolocalisation.",

    quickSearch:
      "Recherche rapide",

    bestValue:
      "Meilleur qualité/prix",

    under15:
      "Moins de 15 €",

    portugueseFood:
      "Cuisine portugaise",

    family:
      "En famille",

    accessible:
      "Accessible PMR",

    openNow:
      "Ouvert maintenant",

    filters:
      "Filtres",

    reset:
      "Réinitialiser",

    city:
      "Commune",

    all:
      "Toutes",

    budget:
      "Budget",

    anyBudget:
      "Peu importe",

    minimumRating:
      "Note minimum",

    cuisine:
      "Cuisine",

    familyFriendly:
      "Adapté aux familles",

    wheelchair:
      "Accessible PMR",

    cardPayment:
      "Paiement par carte",

    results:
      "Résultats",

    sortBy:
      "Trier",

    recommended:
      "Recommandés",

    bestRated:
      "Mieux notés",

    mostReviewed:
      "Plus d’avis",

    restaurants:
      "restaurants",

    restaurant:
      "restaurant",

    noResults:
      "Aucun restaurant correspondant",

    noResultsDescription:
      "Modifiez vos filtres ou votre recherche.",

    compareTitle:
      "Comparateur",

    compareDescription:
      "Sélectionnez jusqu’à 4 restaurants pour les comparer.",

    compare:
      "Comparer",

    compareRestaurants:
      "Comparer les restaurants",

    verifiedData:
      "Données transparentes",

    verifiedDataText:
      "Les informations inconnues ne sont jamais inventées.",

    valueFocus:
      "Rapport qualité/prix",

    valueFocusText:
      "Le prix et la qualité sont analysés séparément.",

    languagesText:
      "Utilisez le service dans votre langue.",

    footerDescription:
      "Recherche intelligente de restaurants dans le district de Braga.",

    dataRule:
      "Une information inconnue reste inconnue : aucune donnée n’est inventée.",

    reviews:
      "avis",

    rating:
      "Note",

    price:
      "Prix",

    unknown:
      "À confirmer",

    qualityScore:
      "Qualité",

    valueScore:
      "Qualité / prix",

    dataConfidence:
      "Confiance",

    high:
      "Élevée",

    medium:
      "Moyenne",

    low:
      "Faible",

    familyYes:
      "Famille : oui",

    accessibleYes:
      "PMR : oui",

    cardYes:
      "Carte : oui",

    hours:
      "Horaires",

    address:
      "Adresse",

    cuisineLabel:
      "Cuisine",

    source:
      "Source",

    lastChecked:
      "Vérifié le",

    why:
      "Pourquoi ce restaurant ?",

    whyRating:
      "Très bonne évaluation globale.",

    whyReviews:
      "Volume d’avis important.",

    whyFamily:
      "Compatible avec les familles selon les informations disponibles.",

    whyAccessible:
      "Des équipements PMR sont signalés.",

    details:
      "Détails",

    map:
      "Carte",

    addCompare:
      "Comparer",

    removeCompare:
      "Retirer",

    favorite:
      "Favori",

    favoriteAdded:
      "Ajouté",

    unknownHours:
      "Horaires à confirmer",

    open:
      "Ouvert",

    closed:
      "Fermé",

    statusUnknown:
      "Ouverture à confirmer",

    mandatory:
      "Obligatoire",

    advised:
      "Conseillée",

    unnecessary:
      "Inutile",

    reservation:
      "Réservation",

    averagePrice:
      "Prix moyen",

    lunchMenu:
      "Menu midi",

    verified:
      "Vérifié",

    sourceUnique:
      "Source unique",

    toConfirm:
      "À confirmer",

    maxCompare:
      "Vous pouvez comparer au maximum 4 restaurants.",

    feature:
      "Critère",

    unavailable:
      "Non renseigné",

    yes:
      "Oui",

    no:
      "Non",

    qualityPriceUnavailable:
      "Non calculable",

    searchActive:
      "Recherche",

    budgetActive:
      "Budget max",

    openActive:
      "Ouvert",

    accessibleActive:
      "PMR",

    familyActive:
      "Famille"
  },


  pt: {
    brandSubtitle: "Qualidade · Preço · Acessibilidade",
    language: "Idioma",
    district: "Distrito de Braga",

    heroTitle:
      "Onde gostaria de comer bem hoje?",

    heroDescription:
      "Encontre um restaurante de acordo com o seu orçamento, qualidade, acessibilidade e preferências.",

    searchLabel:
      "Restaurante, prato ou vontade",

    searchPlaceholder:
      "Ex. bacalhau, restaurante familiar, Braga...",

    searchButton:
      "Pesquisar",

    aroundMe:
      "Perto de mim",

    locating:
      "A procurar a sua localização…",

    locationGranted:
      "Localização detetada.",

    locationDenied:
      "Localização indisponível. Pode continuar sem geolocalização.",

    quickSearch:
      "Pesquisa rápida",

    bestValue:
      "Melhor qualidade/preço",

    under15:
      "Menos de 15 €",

    portugueseFood:
      "Cozinha portuguesa",

    family:
      "Em família",

    accessible:
      "Acessível a mobilidade reduzida",

    openNow:
      "Aberto agora",

    filters:
      "Filtros",

    reset:
      "Repor",

    city:
      "Concelho",

    all:
      "Todos",

    budget:
      "Orçamento",

    anyBudget:
      "Indiferente",

    minimumRating:
      "Classificação mínima",

    cuisine:
      "Cozinha",

    familyFriendly:
      "Adequado para famílias",

    wheelchair:
      "Acessível a cadeira de rodas",

    cardPayment:
      "Pagamento com cartão",

    results:
      "Resultados",

    sortBy:
      "Ordenar",

    recommended:
      "Recomendados",

    bestRated:
      "Melhor avaliados",

    mostReviewed:
      "Mais avaliações",

    restaurants:
      "restaurantes",

    restaurant:
      "restaurante",

    noResults:
      "Nenhum restaurante encontrado",

    noResultsDescription:
      "Altere os filtros ou a pesquisa.",

    compareTitle:
      "Comparador",

    compareDescription:
      "Selecione até 4 restaurantes para comparar.",

    compare:
      "Comparar",

    compareRestaurants:
      "Comparar restaurantes",

    verifiedData:
      "Dados transparentes",

    verifiedDataText:
      "As informações desconhecidas nunca são inventadas.",

    valueFocus:
      "Qualidade/preço",

    valueFocusText:
      "O preço e a qualidade são analisados separadamente.",

    languagesText:
      "Utilize o serviço no seu idioma.",

    footerDescription:
      "Pesquisa inteligente de restaurantes no distrito de Braga.",

    dataRule:
      "Uma informação desconhecida permanece desconhecida: nenhum dado é inventado.",

    reviews:
      "avaliações",

    rating:
      "Classificação",

    price:
      "Preço",

    unknown:
      "A confirmar",

    qualityScore:
      "Qualidade",

    valueScore:
      "Qualidade / preço",

    dataConfidence:
      "Confiança",

    high:
      "Elevada",

    medium:
      "Média",

    low:
      "Baixa",

    familyYes:
      "Família: sim",

    accessibleYes:
      "PMR: sim",

    cardYes:
      "Cartão: sim",

    hours:
      "Horário",

    address:
      "Morada",

    cuisineLabel:
      "Cozinha",

    source:
      "Fonte",

    lastChecked:
      "Verificado em",

    why:
      "Porquê este restaurante?",

    whyRating:
      "Avaliação global muito boa.",

    whyReviews:
      "Número significativo de avaliações.",

    whyFamily:
      "Compatível com famílias segundo os dados disponíveis.",

    whyAccessible:
      "Existem informações de acessibilidade PMR.",

    details:
      "Detalhes",

    map:
      "Mapa",

    addCompare:
      "Comparar",

    removeCompare:
      "Retirar",

    favorite:
      "Favorito",

    favoriteAdded:
      "Adicionado",

    unknownHours:
      "Horário a confirmar",

    open:
      "Aberto",

    closed:
      "Fechado",

    statusUnknown:
      "Abertura a confirmar",

    mandatory:
      "Obrigatória",

    advised:
      "Aconselhada",

    unnecessary:
      "Desnecessária",

    reservation:
      "Reserva",

    averagePrice:
      "Preço médio",

    lunchMenu:
      "Menu de almoço",

    verified:
      "Verificado",

    sourceUnique:
      "Fonte única",

    toConfirm:
      "A confirmar",

    maxCompare:
      "Pode comparar no máximo 4 restaurantes.",

    feature:
      "Critério",

    unavailable:
      "Não indicado",

    yes:
      "Sim",

    no:
      "Não",

    qualityPriceUnavailable:
      "Não calculável",

    searchActive:
      "Pesquisa",

    budgetActive:
      "Orçamento máx.",

    openActive:
      "Aberto",

    accessibleActive:
      "PMR",

    familyActive:
      "Família"
  },


  en: {
    brandSubtitle: "Quality · Price · Accessibility",
    language: "Language",
    district: "Braga District",

    heroTitle:
      "Where would you like to eat well today?",

    heroDescription:
      "Find a restaurant based on your budget, food quality, accessibility and preferences.",

    searchLabel:
      "Restaurant, dish or craving",

    searchPlaceholder:
      "E.g. bacalhau, family restaurant, Braga...",

    searchButton:
      "Search",

    aroundMe:
      "Near me",

    locating:
      "Finding your location…",

    locationGranted:
      "Location detected.",

    locationDenied:
      "Location unavailable. You can continue without geolocation.",

    quickSearch:
      "Quick search",

    bestValue:
      "Best value for money",

    under15:
      "Under €15",

    portugueseFood:
      "Portuguese food",

    family:
      "Family friendly",

    accessible:
      "Wheelchair accessible",

    openNow:
      "Open now",

    filters:
      "Filters",

    reset:
      "Reset",

    city:
      "Municipality",

    all:
      "All",

    budget:
      "Budget",

    anyBudget:
      "Any",

    minimumRating:
      "Minimum rating",

    cuisine:
      "Cuisine",

    familyFriendly:
      "Family friendly",

    wheelchair:
      "Wheelchair accessible",

    cardPayment:
      "Card payment",

    results:
      "Results",

    sortBy:
      "Sort",

    recommended:
      "Recommended",

    bestRated:
      "Best rated",

    mostReviewed:
      "Most reviewed",

    restaurants:
      "restaurants",

    restaurant:
      "restaurant",

    noResults:
      "No matching restaurant",

    noResultsDescription:
      "Change your filters or search.",

    compareTitle:
      "Compare",

    compareDescription:
      "Select up to 4 restaurants to compare.",

    compare:
      "Compare",

    compareRestaurants:
      "Compare restaurants",

    verifiedData:
      "Transparent data",

    verifiedDataText:
      "Unknown information is never invented.",

    valueFocus:
      "Value for money",

    valueFocusText:
      "Price and quality are evaluated separately.",

    languagesText:
      "Use the service in your language.",

    footerDescription:
      "Smart restaurant search across Braga District.",

    dataRule:
      "Unknown information stays unknown: no restaurant data is invented.",

    reviews:
      "reviews",

    rating:
      "Rating",

    price:
      "Price",

    unknown:
      "To confirm",

    qualityScore:
      "Quality",

    valueScore:
      "Value",

    dataConfidence:
      "Confidence",

    high:
      "High",

    medium:
      "Medium",

    low:
      "Low",

    familyYes:
      "Family: yes",

    accessibleYes:
      "Accessible: yes",

    cardYes:
      "Card: yes",

    hours:
      "Hours",

    address:
      "Address",

    cuisineLabel:
      "Cuisine",

    source:
      "Source",

    lastChecked:
      "Checked on",

    why:
      "Why this restaurant?",

    whyRating:
      "Very good overall rating.",

    whyReviews:
      "Large number of reviews.",

    whyFamily:
      "Suitable for families according to available information.",

    whyAccessible:
      "Wheelchair accessibility information is available.",

    details:
      "Details",

    map:
      "Map",

    addCompare:
      "Compare",

    removeCompare:
      "Remove",

    favorite:
      "Favorite",

    favoriteAdded:
      "Added",

    unknownHours:
      "Hours to confirm",

    open:
      "Open",

    closed:
      "Closed",

    statusUnknown:
      "Opening status unknown",

    mandatory:
      "Required",

    advised:
      "Recommended",

    unnecessary:
      "Not required",

    reservation:
      "Reservation",

    averagePrice:
      "Average price",

    lunchMenu:
      "Lunch menu",

    verified:
      "Verified",

    sourceUnique:
      "Single source",

    toConfirm:
      "To confirm",

    maxCompare:
      "You can compare a maximum of 4 restaurants.",

    feature:
      "Criteria",

    unavailable:
      "Not available",

    yes:
      "Yes",

    no:
      "No",

    qualityPriceUnavailable:
      "Cannot calculate",

    searchActive:
      "Search",

    budgetActive:
      "Max budget",

    openActive:
      "Open",

    accessibleActive:
      "Accessible",

    familyActive:
      "Family"
  }

};


/* =========================================================
   DONNÉES RESTAURANTS
   Uniquement les informations déjà fournies.
========================================================= */

const restaurants = [

  {
    id: "pt-braga-tia-isabel",

    name: "Tia Isabel",

    address:
      "Avenida Frei Bartolomeu dos Mártires Nº32–36, São Vítor, 4715-385 Braga, Portugal",

    city:
      "Braga",

    latitude:
      null,

    longitude:
      null,

    phone:
      "800 183 272",

    ratingValue:
      4.6,

    ratingScale:
      5,

    reviewCount:
      3220,

    ratingSource:
      "Google",

    cuisines: [
      "portuguese",
      "minhota",
      "meat",
      "seafood"
    ],

    cuisineLabels: {
      fr:
        "Portugaise traditionnelle · Minhota · Viandes · Fruits de mer",

      pt:
        "Portuguesa tradicional · Minhota · Carnes · Marisco",

      en:
        "Traditional Portuguese · Minho · Meat · Seafood"
    },

    description: {
      fr:
        "Restaurant élégant et chaleureux proposant une cuisine inspirée des traditions du Minho, des viandes, poissons et fruits de mer.",

      pt:
        "Restaurante elegante e acolhedor com cozinha inspirada na tradição minhota, carnes, peixe e marisco.",

      en:
        "Elegant and welcoming restaurant serving food inspired by Minho traditions, including meat, fish and seafood."
    },

    averagePrice:
      null,

    lunchMenuPrice:
      null,

    budgetLevel:
      null,

    budgetConfidence:
      "a_confirmer",

    familyFriendly:
      true,

    wheelchairAccessible:
      true,

    cardPayment:
      true,

    groupsAccepted:
      true,

    vegetarianOption:
      null,

    reservation:
      null,

    hoursConfidence:
      "source_unique",

    hours: {
      1: [
        ["12:00", "15:00"],
        ["19:30", "22:30"]
      ],

      2: [
        ["12:00", "15:00"],
        ["19:30", "22:30"]
      ],

      3: [
        ["12:00", "15:00"],
        ["19:30", "22:30"]
      ],

      4: [
        ["12:00", "15:00"],
        ["19:30", "22:30"]
      ],

      5: [
        ["12:00", "15:00"],
        ["19:30", "22:30"]
      ],

      6: [
        ["12:00", "15:00"],
        ["19:30", "22:30"]
      ],

      0: [
        ["12:00", "15:00"]
      ]
    },

    emblematicDishes: [
      {
        original:
          "Rosbife Wellington",
        price:
          null
      },

      {
        original:
          "Cabrito Assado no Forno",
        price:
          null
      },

      {
        original:
          "Bacalhau Recheado à Moda de Braga",
        price:
          null
      },

      {
        original:
          "Rissóis / Croquetes",
        price:
          0.90,
        unit:
          "unidade"
      },

      {
        original:
          "Bolinhos de Bacalhau",
        price:
          1.00,
        unit:
          "unidade"
      }
    ],

    verifiedDate:
      "2026-10-17"
  },


  {
    id:
      "pt-braga-tasca-do-carregal",

    name:
      "Tasca do Carregal",

    address:
      "Av. do Carregal 162, 4705-513 Morreira",

    city:
      "Braga",

    latitude:
      null,

    longitude:
      null,

    phone:
      null,

    ratingValue:
      9.4,

    ratingScale:
      10,

    reviewCount:
      453,

    ratingSource:
      "bellaciao.pt",

    cuisines: [
      "portuguese"
    ],

    cuisineLabels: {
      fr:
        "Portugaise traditionnelle · Plats du jour",

      pt:
        "Portuguesa tradicional · Pratos do dia",

      en:
        "Traditional Portuguese · Daily specials"
    },

    description: {
      fr:
        "Tasca traditionnelle située hors du centre de Braga, connue pour ses plats du jour et son ambiance simple et authentique.",

      pt:
        "Tasca tradicional fora do centro de Braga, conhecida pelos pratos do dia e ambiente simples e autêntico.",

      en:
        "Traditional tasca outside central Braga, known for daily specials and a simple, authentic atmosphere."
    },

    averagePrice:
      null,

    lunchMenuPrice:
      null,

    budgetLevel:
      null,

    budgetConfidence:
      "a_confirmer",

    familyFriendly:
      null,

    wheelchairAccessible:
      null,

    cardPayment:
      null,

    groupsAccepted:
      null,

    vegetarianOption:
      null,

    reservation:
      "obligatoire",

    hours:
      null,

    hoursConfidence:
      "a_confirmer",

    emblematicDishes: [
      {
        original:
          "Lasagne de morue",
        price:
          null
      }
    ],

    verifiedDate:
      "2026-10-17"
  }

];


/* =========================================================
   ETAT APPLICATION
========================================================= */

const state = {
  language:
    detectLanguage(),

  query:
    "",

  city:
    "",

  budget:
    null,

  minimumRating:
    0,

  cuisine:
    "",

  family:
    false,

  accessible:
    false,

  card:
    false,

  openNow:
    false,

  sort:
    "recommended",

  userLocation:
    null,

  compare:
    new Set(),

  favorites:
    loadFavorites()
};


/* =========================================================
   ELEMENTS DOM
========================================================= */

const elements = {
  languageSelect:
    document.getElementById(
      "languageSelect"
    ),

  searchInput:
    document.getElementById(
      "searchInput"
    ),

  searchButton:
    document.getElementById(
      "searchButton"
    ),

  locationButton:
    document.getElementById(
      "locationButton"
    ),

  locationStatus:
    document.getElementById(
      "locationStatus"
    ),

  cityFilter:
    document.getElementById(
      "cityFilter"
    ),

  budgetFilter:
    document.getElementById(
      "budgetFilter"
    ),

  ratingFilter:
    document.getElementById(
      "ratingFilter"
    ),

  cuisineFilter:
    document.getElementById(
      "cuisineFilter"
    ),

  familyFilter:
    document.getElementById(
      "familyFilter"
    ),

  accessibleFilter:
    document.getElementById(
     
