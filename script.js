// STORAGE & UTIL
const STORAGE_KEY = 'rh_recipes_final_v1';
function readStorage(){ try{ const v = localStorage.getItem(STORAGE_KEY); return v ? JSON.parse(v) : null } catch(e){ return null } }
function writeStorage(data){ localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function genId(){ return 'r_' + Math.random().toString(36).slice(2,9); }
function escapeHtml(s){ return String(s || '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

// RICH SAMPLE RECIPES (detailed steps)
const sample = [
  // Indian Main - Veg
  { id: genId(), title:'Dal Tadka', cuisine:'Indian Main', time:'40 mins', type:'veg',
    ingredients:['1 cup toor dal','2 tbsp ghee','1 tsp mustard seeds','1 tsp cumin seeds','1 onion, chopped','2 tomatoes, chopped','2-3 green chillies','1/2 tsp turmeric','Salt to taste','Fresh coriander'],
    steps:[
      'Wash dal thoroughly. Soak 10-15 minutes for quicker cooking.',
      'Pressure cook dal with 3 cups water, turmeric and a pinch of salt until soft (3-4 whistles).',
      'Heat ghee in a pan, add mustard and cumin seeds; let them splutter.',
      'Add chopped onions and green chillies. Sauté until translucent and golden.',
      'Add tomatoes and cook until oil separates and tomatoes are soft.',
      'Pour tempering over cooked dal, mix and simmer 5 minutes. Adjust salt and consistency.',
      'Garnish with fresh coriander and serve hot with rice or roti.'
    ],
    image:'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Paneer Butter Masala', cuisine:'Indian Main', time:'45 mins', type:'veg',
    ingredients:['200g paneer','3 tomatoes','1 onion','2 tbsp butter','2 tbsp cream','1 tsp kasuri methi','1 tsp ginger-garlic paste','Spices: turmeric, red chili, garam masala','Salt'],
    steps:[
      'Blend tomatoes and onion into a smooth puree.',
      'Heat butter, add ginger-garlic paste and sauté until raw smell goes.',
      'Add tomato-onion puree, spices and cook until oil separates.',
      'Add cream and simmer to get a rich gravy.',
      'Add paneer cubes, sprinkle kasuri methi and cook 4-5 minutes so paneer soaks flavour.',
      'Adjust seasoning; finish with a knob of butter and serve with naan/roti.'
    ],
    image:'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Chicken Curry (Home Style)', cuisine:'Indian Main', time:'60 mins', type:'nonveg',
    ingredients:['1 kg chicken pieces','2 onions','2 tomatoes','1 cup yogurt','2 tbsp ginger-garlic paste','Spices: turmeric, red chili, coriander powder, garam masala','Oil','Salt'],
    steps:[
      'Marinate chicken with yogurt, turmeric, salt and half the spice powders for 30 min.',
      'Heat oil, sauté sliced onions till deep golden; remove some for garnish.',
      'Add ginger-garlic paste and cook till raw smell disappears.',
      'Add tomato paste and remaining spices; cook until oil separates.',
      'Add marinated chicken and cook covered on medium heat until tender (30-35 mins), stirring occasionally.',
      'Finish with garam masala, simmer 5 minutes. Garnish with fried onions and coriander.'
    ],
    image:'https://images.unsplash.com/photo-1608747706817-2f3b6b5a9b7f?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Goan Fish Curry', cuisine:'Coastal', time:'40 mins', type:'nonveg',
    ingredients:['500g fish pieces','1 cup coconut milk','2 tbsp tamarind pulp','2 onions','3 tomatoes','Curry paste (red chilies, coriander, cumin, turmeric)','Salt'],
    steps:[
      'Make a spice paste from dry red chilies, coriander, cumin and turmeric with a little water.',
      'Sauté onions and tomatoes in oil until soft; add spice paste and cook well.',
      'Add tamarind pulp and some water; bring to simmer.',
      'Add coconut milk and gently mix; do not boil vigorously after adding coconut milk.',
      'Add fish pieces, simmer on low heat until fish is cooked through (6-10 mins).',
      'Adjust salt and sourness; serve with steamed rice.'
    ],
    image:'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Mutton Rogan Josh', cuisine:'North Indian', time:'140 mins', type:'nonveg',
    ingredients:['1 kg mutton','1 cup yogurt','2 onions','ginger-garlic paste','Kashmiri red chili powder','Garam masala','Whole spices','Salt'],
    steps:[
      'Marinate mutton with yogurt, salt and a little red chili powder for 1 hour.',
      'Heat oil/ghee, add whole spices and sauté sliced onions till caramelized.',
      'Add ginger-garlic paste and cook well; then add marinated mutton.',
      'Stir on high heat to sear meat, then reduce heat and add water; cover and simmer.',
      'Cook slowly for 1.5-2 hours till mutton is tender, stirring occasionally and adding water if needed.',
      'Finish with garam masala and coriander; garnish and serve with steamed rice or naan.'
    ],
    image:'https://images.unsplash.com/photo-1604908177522-5c4c4b1b3a1e?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  // Snacks
  { id: genId(), title:'Aloo Tikki', cuisine:'Snacks', time:'30 mins', type:'veg',
    ingredients:['3-4 boiled potatoes','1/2 cup peas','1 tsp chaat masala','Salt','Oil for shallow frying','Spices'],
    steps:[
      'Boil and mash potatoes; mix boiled peas, chaat masala, salt and spices.',
      'Shape into flat round patties and dust with cornflour for binding.',
      'Heat oil in pan and shallow fry tikkis until golden and crisp on both sides.',
      'Serve hot with green chutney, tamarind chutney or curd.',
      'Optional: top with chopped onion, sev and chaat masala for chaat-style serving.'
    ],
    image:'https://images.unsplash.com/photo-1547592180-6f6ea0a0b0b0?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Samosa (Crispy)', cuisine:'Snacks', time:'60 mins', type:'veg',
    ingredients:['For dough: 2 cups flour, oil, salt','For filling: potatoes, peas, spices, green chillies','Oil for deep frying'],
    steps:[
      'Make firm dough with flour, oil and water; rest 20 minutes.',
      'Boil and mash potatoes; sauté with peas and spices to prepare filling.',
      'Roll dough into cones, stuff filling and seal edges with water.',
      'Deep fry samosas in hot oil till golden and crisp.',
      'Drain on paper towel and serve hot with chutneys.'
    ],
    image:'https://images.unsplash.com/photo-1551216808-1a3f8b19b0b6?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Pani Puri (Gol Gappa)', cuisine:'Snacks', time:'30 mins', type:'veg',
    ingredients:['Puris','Potato filling','Tamarind chutney','Spicy mint-coriander water','Chaat masala'],
    steps:[
      'Prepare spicy mint-coriander water by blending mint, coriander, green chilies, lemon and spices.',
      'Make potato stuffing with boiled potatoes, chaat masala and salt.',
      'Crack a small hole into each puri, stuff with potato mix and chutney.',
      'Dip stuffed puri into chilled pani and eat immediately for best crunch.',
      'Serve on a plate with extra chutneys and fillings on the side.'
    ],
    image:'https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Masala Dosa', cuisine:'South Indian', time:'50 mins', type:'veg',
    ingredients:['Dosa batter (rice+urad dal)','Potato masala (potatoes, mustard seeds, curry leaves)','Oil','Chutney & sambar'],
    steps:[
      'Prepare crisp dosa batter (fermented) or use store-bought batter.',
      'Boil potatoes and prepare a lightly spiced masala with mustard seeds and curry leaves.',
      'Heat a dosa tawa, pour batter thinly in circle and spread to make a thin crepe.',
      'Place potato masala in center and fold dosa; drizzle ghee/oil and cook till crisp.',
      'Serve hot with coconut chutney and sambar.'
    ],
    image:'https://images.unsplash.com/photo-1543352634-1a5c32feda2e?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  // Sweets
  { id: genId(), title:'Gulab Jamun', cuisine:'Sweets', time:'60 mins', type:'veg',
    ingredients:['Milk powder/khoya based dough','Maida','Sugar syrup flavored with cardamom and rose','Oil for frying'],
    steps:[
      'Prepare smooth dough balls from khoya or milk powder mix; avoid cracks.',
      'Make light sugar syrup and flavor with cardamom and rose water; keep warm.',
      'Deep fry dough balls on low-medium heat till golden brown and cooked inside.',
      'Immediately transfer hot gulab jamuns into warm sugar syrup and soak 1-2 hours.',
      'Serve warm or at room temperature garnished with pistachio slivers.'
    ],
    image:'https://images.unsplash.com/photo-1604898249443-2d1b0f3d0c4b?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Jalebi', cuisine:'Sweets', time:'45 mins', type:'veg',
    ingredients:['Maida','Yogurt for batter','Sugar syrup','Ghee/oil for frying'],
    steps:[
      'Prepare a flowing batter with maida and a little yogurt; ferment lightly if possible.',
      'Heat sugar syrup to one-string consistency and keep warm.',
      'Pipe batter in circular shapes into hot oil/ghee and fry till crisp.',
      'Drop fried jalebis into warm sugar syrup for a few seconds and remove.',
      'Serve hot with rabri or as is.'
    ],
    image:'https://images.unsplash.com/photo-1589308078055-5e42f5a9c7b3?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Rasgulla', cuisine:'Sweets', time:'60 mins', type:'veg',
    ingredients:['Chenna (fresh paneer)','Sugar syrup','Rose/cardamom (optional)'],
    steps:[
      'Make smooth chenna by curdling milk and squeezing out water; knead till smooth.',
      'Shape into small balls without cracks.',
      'Boil balls in light sugar syrup until they double and are spongy.',
      'Cool and store in syrup; refrigerate or serve chilled.',
      'Optional: flavor syrup with cardamom or rose for aroma.'
    ],
    image:'https://images.unsplash.com/photo-1562158070-6fb9c2f6c56d?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Kheer (Rice Pudding)', cuisine:'Sweets', time:'60 mins', type:'veg',
    ingredients:['1/2 cup basmati rice','1 litre milk','Sugar','Cardamom','Nuts (almond, pistachio)'],
    steps:[
      'Wash rice and lightly roast if desired for extra aroma.',
      'Boil milk in a heavy bottom pan; add rice and cook on low heat, stirring to avoid sticking.',
      'When rice is soft and milk thickens, add sugar and cardamom.',
      'Cook until desired consistency; add chopped nuts and simmer 2-3 minutes.',
      'Serve warm or chilled garnished with saffron and nuts.'
    ],
    image:'https://images.unsplash.com/photo-1604908177522-5c4c4b1b3a1e?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  // Drinks
  { id: genId(), title:'Mango Lassi', cuisine:'Drinks', time:'10 mins', type:'veg',
    ingredients:['Ripe mango pulp','Yogurt','Sugar or honey','Cardamom powder','Ice cubes'],
    steps:[
      'Blend mango pulp and yogurt until smooth.',
      'Add sugar/honey and a pinch of cardamom; blend with ice.',
      'Adjust sweetness and consistency with milk or water.',
      'Serve chilled garnished with a pinch of cardamom or saffron strands.'
    ],
    image:'https://images.unsplash.com/photo-1572448862528-3d5b0a7bd8a7?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Masala Chai', cuisine:'Drinks', time:'15 mins', type:'veg',
    ingredients:['Tea leaves','Milk','Water','Sugar','Spices: cardamom, ginger, cloves, cinnamon'],
    steps:[
      'Crush spices lightly and boil in water to extract flavor.',
      'Add tea leaves and simmer a minute.',
      'Add milk and sugar; simmer until desired color and strength.',
      'Strain and serve hot in cups.'
    ],
    image:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Sugarcane Juice', cuisine:'Drinks', time:'10 mins', type:'vegan',
    ingredients:['Fresh sugarcane','Lemon','Black salt','Ice (optional)'],
    steps:[
      'Extract fresh sugarcane juice using a juicer (fresh and chilled).',
      'Mix in a squeeze of lemon and a pinch of black salt or chaat masala.',
      'Serve immediately over ice for a refreshing drink.'
    ],
    image:'https://images.unsplash.com/photo-1542445810-70f7f1b0f5a6?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Coconut Water (Fresh)', cuisine:'Drinks', time:'5 mins', type:'vegan',
    ingredients:['Fresh coconut','Optional: lemon or mint'],
    steps:[
      'Crack open fresh tender coconut and strain the water.',
      'Add a squeeze of lemon or few mint leaves for flavor if desired.',
      'Serve chilled in a glass.'
    ],
    image:'https://images.unsplash.com/photo-1505576391880-648ad1f0d5b1?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  // Jain / Fasting / Vegan
  { id: genId(), title:'Jain Style Sabzi (Batata nu shaak)', cuisine:'Jain', time:'30 mins', type:'veg',
    ingredients:['Potato','Peanut/khus khus paste','Turmeric','Cumin seeds','Salt','Ghee'],
    steps:[
      'Boil and dice potatoes.',
      'Tempering: heat ghee, add cumin and curry leaves (if used), saute.',
      'Add turmeric and potatoes, mix well and cook 5-7 minutes.',
      'Prepare a peanut/khus khus paste to thicken and add for richness (optional for Jain preference).',
      'Cook until flavours blend; adjust salt and serve with rotla or rice.'
    ],
    image:'https://images.unsplash.com/photo-1579088003013-1b971c626f5a?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  { id: genId(), title:'Vegan Chana Masala', cuisine:'Indian Main', time:'40 mins', type:'vegan',
    ingredients:['Chickpeas','Onion','Tomato','Ginger-garlic','Spices: garam masala, coriander powder','Salt'],
    steps:[
      'Soak (if dry) and cook chickpeas until soft or use canned chickpeas; keep aside.',
      'Prepare onion-tomato gravy with sautéed onions, tomato and spices.',
      'Add chickpeas and simmer allowing chickpeas to soak up gravy flavors.',
      'Adjust spice levels and add lemon for a bright finish.',
      'Garnish with coriander and serve with rice or bhature.'
    ],
    image:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1000&q=60', reviews:[] },

  // extra: light dessert drink
  { id: genId(), title:'Thandai (Fasting/ Festival)', cuisine:'Drinks', time:'20 mins', type:'veg',
    ingredients:['Milk','Thandai masala (almonds, fennel, poppy seeds, cardamom)','Sugar','Saffron'],
    steps:[
      'Prepare thandai paste by grinding nuts and seeds with a little water.',
      'Mix paste into cold milk, add sugar and saffron; chill.',
      'Serve cold with crushed nuts on top.'
    ],
    image:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=60', reviews:[] }
];

// STATE
let recipes = readStorage() || sample;
if(!readStorage()) writeStorage(recipes);

let selectedId = null;
let activeCuisine = null; // null = all
let activeType = null; // 'veg' | 'vegan' | 'nonveg' or null

// ELEMENTS
const grid = document.getElementById('grid');
const countInfo = document.getElementById('countInfo');
const cuisineList = document.getElementById('cuisineList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const saveAdd = document.getElementById('saveAdd');
const cancelAdd = document.getElementById('cancelAdd');

const detailContent = document.getElementById('detailContent');
const noSelection = document.getElementById('noSelection');
const detailImg = document.getElementById('detailImg');
const detailTitle = document.getElementById('detailTitle');
const detailCuisine = document.getElementById('detailCuisine');
const detailTime = document.getElementById('detailTime');
const detailIngredients = document.getElementById('detailIngredients');
const detailSteps = document.getElementById('detailSteps');
const reviewsList = document.getElementById('reviewsList');
const addReviewBtn = document.getElementById('addReviewBtn');
const clearReviewsBtn = document.getElementById('clearReviewsBtn');

const rTitle = document.getElementById('rTitle');
const rCuisine = document.getElementById('rCuisine');
const rTime = document.getElementById('rTime');
const rIngredients = document.getElementById('rIngredients');
const rSteps = document.getElementById('rSteps');
const rImage = document.getElementById('rImage');

const reviewer = document.getElementById('reviewer');
const reviewText = document.getElementById('reviewText');

const filterVegBtn = document.getElementById('filterVeg');
const filterVeganBtn = document.getElementById('filterVegan');
const filterNonVegBtn = document.getElementById('filterNonVeg');

const showAllBtn = document.getElementById('showAll');
const showSweetsBtn = document.getElementById('showSweets');
const showDrinksBtn = document.getElementById('showDrinks');

// INIT
renderCuisineChips();
applyFilters(); // initial render

// EVENTS
searchBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') applyFilters(); });

addBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFn);
cancelAdd.addEventListener('click', closeModalFn);
saveAdd.addEventListener('click', saveRecipeFromModal);

filterVegBtn.addEventListener('click', ()=>{ toggleType('veg'); });
filterVeganBtn.addEventListener('click', ()=>{ toggleType('vegan'); });
filterNonVegBtn.addEventListener('click', ()=>{ toggleType('nonveg'); });

addReviewBtn.addEventListener('click', addReviewToSelected);
clearReviewsBtn.addEventListener('click', ()=>{
  if(!selectedId) return alert('Select a recipe first');
  const r = recipes.find(x=>x.id === selectedId);
  if(!r) return;
  r.reviews = [];
  saveAndRerender();
  showDetail(r.id);
});

showAllBtn.addEventListener('click', ()=>{ activeCuisine = null; document.querySelectorAll('#cuisineList .chip').forEach(x=>x.classList.remove('active')); document.querySelector('#cuisineList .chip')?.classList.add('active'); applyFilters(); });
showSweetsBtn.addEventListener('click', ()=>{ activeCuisine = 'Sweets'; document.querySelectorAll('#cuisineList .chip').forEach(x=>x.classList.remove('active')); Array.from(document.querySelectorAll('#cuisineList .chip')).find(x=>x.textContent==='Sweets')?.classList.add('active'); applyFilters(); });
showDrinksBtn.addEventListener('click', ()=>{ activeCuisine = 'Drinks'; document.querySelectorAll('#cuisineList .chip').forEach(x=>x.classList.remove('active')); Array.from(document.querySelectorAll('#cuisineList .chip')).find(x=>x.textContent==='Drinks')?.classList.add('active'); applyFilters(); });

// FUNCTIONS
function renderCuisineChips(){
  const set = new Set(recipes.map(r=>r.cuisine || 'Other'));
  // ensure common categories exist
  ['Indian Main','North Indian','South Indian','Snacks','Sweets','Drinks','Jain','Coastal','Other'].forEach(c=>set.add(c));
  const arr = ['All', ...Array.from(set).sort()];
  cuisineList.innerHTML = '';
  arr.forEach((c, idx) => {
    const d = document.createElement('div');
    d.textContent = c;
    d.className = 'chip' + (idx === 0 ? ' active' : '');
    d.style.fontWeight = '700';
    d.addEventListener('click', ()=>{
      document.querySelectorAll('#cuisineList .chip').forEach(x=>x.classList.remove('active'));
      d.classList.add('active');
      activeCuisine = (c === 'All') ? null : c;
      applyFilters();
    });
    cuisineList.appendChild(d);
  });
}

function renderGrid(list){
  grid.innerHTML = '';
  if(!Array.isArray(list)) list = [];
  list.forEach(r => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = ()=>{ showDetail(r.id); };
    const img = document.createElement('img');
    img.src = r.image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60';
    img.alt = r.title;
    const body = document.createElement('div');
    body.className = 'rc-body';
    const title = document.createElement('div');
    title.style.fontWeight = '800';
    title.textContent = r.title;
    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<div style="font-weight:700">${escapeHtml(r.cuisine || '')}</div><div class="small">${escapeHtml(r.time || '')}</div>`;
    body.appendChild(title);
    body.appendChild(meta);
    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });
  countInfo.textContent = (list.length || 0) + ' recipes';
}

function showDetail(id){
  selectedId = id;
  const r = recipes.find(x=>x.id === id);
  if(!r) return;
  noSelection.style.display = 'none';
  detailContent.style.display = 'block';
  detailImg.src = r.image || '';
  detailTitle.textContent = r.title;
  detailCuisine.textContent = (r.cuisine || '') + (r.type ? ` • ${r.type.toUpperCase()}` : '');
  detailTime.textContent = r.time || '';
  detailIngredients.innerHTML = (r.ingredients || []).map(i=>`<li>${escapeHtml(i)}</li>`).join('');
  detailSteps.innerHTML = (r.steps || []).map(s=>`<li>${escapeHtml(s)}</li>`).join('');
  renderReviews(r.reviews || []);
}

function renderReviews(list){
  if(!list || list.length === 0){
    reviewsList.innerHTML = '<div class="small muted">No reviews yet — be the first!</div>';
    return;
  }
  reviewsList.innerHTML = list.map(rv => `<div style="margin-bottom:8px"><strong>${escapeHtml(rv.name)}</strong><div class="small muted">${escapeHtml(rv.when)}</div><div>${escapeHtml(rv.text)}</div></div>`).join('');
}

function openModal(){ modal.style.display = 'flex'; rTitle.focus(); }
function closeModalFn(){ modal.style.display = 'none'; clearModal(); }
function clearModal(){
  rTitle.value = ''; rCuisine.value = 'Indian Main'; rTime.value = '30 mins';
  rIngredients.value = ''; rSteps.value = ''; rImage.value = '';
  const radios = document.getElementsByName('type'); if(radios && radios[0]) radios[0].checked = true;
}

function saveRecipeFromModal(){
  const title = (rTitle.value || '').trim();
  if(!title) return alert('Please add a title');
  const cuisine = (rCuisine.value || 'Other').trim();
  const time = (rTime.value || '30 mins').trim();
  const ingredients = (rIngredients.value || '').split(',').map(s=>s.trim()).filter(Boolean);
  const steps = (rSteps.value || '').split(/\n/).map(s=>s.trim()).filter(Boolean);
  const image = (rImage.value || '').trim();
  const type = (() => { const checked = document.querySelector('input[name="type"]:checked'); return checked ? checked.value : 'veg'; })();

  const rec = { id: genId(), title, cuisine, time, type, ingredients, steps, image, reviews: [] };
  recipes.unshift(rec);
  writeStorage(recipes);
  renderCuisineChips();
  applyFilters();
  closeModalFn();
  showDetail(rec.id);
}

function applyFilters(){
  const q = (searchInput.value || '').toLowerCase().trim();
  let filtered = recipes.filter(r => {
    if(activeCuisine && r.cuisine !== activeCuisine) return false;
    if(activeType && r.type !== activeType) return false;
    if(!q) return true;
    const inTitle = (r.title || '').toLowerCase().includes(q);
    const inCuisine = (r.cuisine || '').toLowerCase().includes(q);
    const inIngredients = (r.ingredients || []).join(' ').toLowerCase().includes(q);
    return inTitle || inCuisine || inIngredients;
  });
  renderGrid(filtered);
}

// Type toggle: mutually exclusive
function toggleType(type){
  if(activeType === type) activeType = null;
  else activeType = type;
  [ ['veg', filterVegBtn], ['vegan', filterVeganBtn], ['nonveg', filterNonVegBtn] ].forEach(([t,btn])=>{
    if(activeType === t) btn.classList.add('active'); else btn.classList.remove('active');
  });
  applyFilters();
}

function addReviewToSelected(){
  if(!selectedId) return alert('Select a recipe first');
  const name = (document.getElementById('reviewer').value || 'Guest').trim();
  const text = (document.getElementById('reviewText').value || '').trim();
  if(!text) return alert('Please write a short review');
  const r = recipes.find(x => x.id === selectedId);
  if(!r) return;
  r.reviews = r.reviews || [];
  r.reviews.unshift({ name, text, when: new Date().toLocaleString() });
  saveAndRerender();
  renderReviews(r.reviews);
  document.getElementById('reviewer').value = '';
  document.getElementById('reviewText').value = '';
}

function saveAndRerender(){
  writeStorage(recipes);
  renderCuisineChips();
  applyFilters();
}

// close modal when clicking backdrop
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModalFn(); });
// Esc closes modal
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && modal.style.display === 'flex') closeModalFn(); });

// initial: show first recipe
if(recipes.length) { showDetail(recipes[0].id); }
