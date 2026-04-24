const branchesData = [
    {
        id: "dadar",
        city: "Mumbai (Dadar)",
        name: "Dadar West Clinic",
        address: "Shop No 4/5, Shantaram Niwas, Ground Floor, Behind Waman Hari Pethe Jewellers, Dadar West",
        phone: "+91-77100 01102",
        mapsQuery: "Dr Joshi’s Clinic Dadar West Mumbai 400028",
        img: "juhu.jpg"
    },
    {
        id: "borivali",
        city: "Mumbai (Borivali)",
        name: "Borivali West Clinic",
        address: "Flat No. 102, 1st Floor, Sardar Aakanksha CHS, Opp. Bhagwati Hospital, Borivali (W)",
        phone: "+91-91361 14826",
        mapsQuery: "Dr Joshi Ayurvedic Clinic Borivali West",
        img: "bandra.jpg"
    },
    {
        id: "thane",
        city: "Thane",
        name: "Thane West Clinic",
        address: "Shop No. 1, Royal Chambers, Ground Floor, Near Dagadi School, Charai, Thane (W)",
        phone: "+91-88984 84166",
        mapsQuery: "Dr Joshis Multispecialty Clinic Charai Thane West 400601",
        img: "south_mumbai.jpg"
    },
    {
        id: "pune",
        city: "Pune",
        name: "Pune Clinic",
        address: "1st Floor, Plot No. 4, S. No. 46/1, B-2, Beside ICICI Bank, Pune-Satara Road",
        phone: "+91-78877 33444",
        mapsQuery: "Dr Joshi Holistic Clinic Pune Satara Road 411009",
        img: "consultation.jpg"
    },
    {
        id: "nashik",
        city: "Nashik",
        name: "Nashik Clinic",
        address: "Alankar Society, Shop No. 2, Near Govind Dande and Sons, Next Khare Typing",
        phone: "+91-84548 47184",
        mapsQuery: "Dr Joshis Holistic Multispeciality Clinic Nashik 422101",
        img: "lobby.jpg"
    }
];

const servicesData = [
    {
        id: 'panchakarma',
        title: 'Ayurvedic Panchakarma Treatment',
        intro: 'Panchakarma is the cornerstone of classical Ayurvedic medicine — a structured five-step purification process designed to gently eliminate accumulated toxins (ama), rebalance the doshas and restore the body\'s innate ability to heal itself.',
        symptoms: ['Persistent fatigue, brain fog and low energy', 'Frequent indigestion, bloating and irregular bowel movements', 'Dull skin, hair fall and joint stiffness'],
        method: ['Detailed pulse, prakriti and vikriti assessment', 'Preparatory therapies (Snehana and Swedana)', 'Core Panchakarma procedures'],
        benefits: ['Deep cellular detoxification without side-effects', 'Improved digestion, sleep, immunity and skin clarity', 'Mental calmness, sharper focus and emotional balance'],
        img: 'consultation.jpg'
    },
    {
        id: 'holistic',
        title: 'Ayurvedic Holistic Treatment',
        intro: 'True healing happens when the body, mind and daily habits move together in the same direction. Our holistic Ayurvedic programs look beyond a single symptom and treat you as a whole person.',
        symptoms: ['Multiple unexplained complaints across systems', 'Recurrent infections and slow recovery', 'Hormonal swings, weight changes and low libido'],
        method: ['Whole-person consultation covering physical and lifestyle factors', 'Personalised herbal prescriptions', 'Yoga, pranayama and mindfulness coaching'],
        benefits: ['Sustainable improvement in energy, mood and resilience', 'Reduced dependence on symptomatic medication', 'Better digestion, hormonal balance and immunity'],
        img: 'lobby.jpg'
    },
    {
        id: 'organic',
        title: 'Ayurvedic Organic Medicine',
        intro: 'Medicines are only as good as the herbs that go into them. Every formulation we use is prepared in-house from carefully sourced organic herbs, processed using traditional methods.',
        symptoms: ['Inconsistent results from over-the-counter products', 'Side-effects or stomach upset', 'No improvement despite long-term self-medication'],
        method: ['Direct sourcing from trusted organic farms', 'Classical preparation techniques', 'Doctor-prescribed tailored dosage'],
        benefits: ['Higher potency with predictable results', 'Minimal to no side-effects', 'Complete traceability from herb to bottle'],
        img: 'juhu.jpg'
    },
    {
        id: 'kidney',
        title: 'Ayurvedic Kidney Treatment',
        intro: 'Kidney disease rarely happens overnight, and it does not have to end on dialysis. Our Ayurvedic nephrology programs combine classical formulations to slow disease progression.',
        symptoms: ['Swelling around the eyes, ankles and feet', 'Foamy or blood-tinged urine', 'Rising creatinine and urea on blood reports'],
        method: ['Detailed nephro-Ayurvedic assessment', 'Customised herbal protocol using Punarnava, Gokshura', 'Strict dietary plan controlling protein and sodium'],
        benefits: ['Stabilised or improved creatinine and GFR', 'Reduced swelling, better appetite and energy levels', 'Lower frequency of dialysis sessions'],
        img: 'experience.jpg'
    },
    {
        id: 'cancer',
        title: 'Ayurvedic Cancer Treatment',
        intro: 'Cancer care is no longer a single-treatment journey. Our integrative Ayurvedic oncology program works alongside your oncologist to reduce side-effects and rebuild strength.',
        symptoms: ['Unexplained weight loss and fatigue', 'Lumps, non-healing ulcers', 'Severe side-effects of ongoing chemo or radiation'],
        method: ['Stage-aware integrative plan with oncologist', 'Rasayana herbs to support immunity', 'Specific protocols for chemo-induced nausea'],
        benefits: ['Better tolerance of chemotherapy and radiation', 'Improved appetite, weight and haemoglobin', 'Reduced fatigue and faster recovery'],
        img: 'bandra.jpg'
    },
    {
        id: 'brain',
        title: 'Ayurvedic Brain Treatment',
        intro: 'The nervous system is exquisitely sensitive to lifestyle, sleep and nutrition. Our Ayurvedic neuro-care program addresses chronic headaches, migraine, stroke recovery, Parkinson\'s, and anxiety.',
        symptoms: ['Frequent headaches, migraine and dizziness', 'Tremors, stiffness, slowed movement', 'Memory lapses and persistent anxiety'],
        method: ['Shirodhara and Shiroabhyanga to calm the nervous system', 'Nasya therapy with medicated oils', 'Yoga, pranayama and meditation'],
        benefits: ['Reduced frequency and intensity of migraines', 'Better sleep, calmer mind and improved focus', 'Faster neurological recovery'],
        img: 'south_mumbai.jpg'
    },
    {
        id: 'diabetes',
        title: 'Ayurvedic Diabetes Treatment',
        intro: 'Diabetes is a metabolic story written over years of lifestyle choices. Our program combines proven herbs, structured diet, movement and stress management to improve insulin sensitivity.',
        symptoms: ['Increased thirst, hunger and frequent urination', 'Unexplained weight loss or stubborn weight gain', 'Slow-healing wounds and recurrent infections'],
        method: ['Detailed metabolic and lifestyle assessment', 'Herbal support with Vijaysar, Gudmar, Karela', 'Structured low-glycaemic diet'],
        benefits: ['Better HbA1c and stable daily sugar readings', 'Reduced dependence on oral medication', 'Lower risk of neuropathy and kidney damage'],
        img: 'consultation.jpg'
    },
    {
        id: 'infertility',
        title: 'Ayurvedic Infertility Treatment',
        intro: 'Fertility is the result of healthy ovulation, healthy sperm and a healthy uterine environment. Our couple-centric Ayurvedic fertility program improves reproductive tissue and balances hormones.',
        symptoms: ['Inability to conceive after 12 months', 'Irregular or painful periods', 'Low sperm count, motility or morphology issues'],
        method: ['Couple consultation and review of reports', 'Uttar basti and other classical procedures', 'Rasayana and Vajikarana herbs for both partners'],
        benefits: ['Improved egg and sperm quality', 'Regular cycles and balanced hormones', 'Better implantation success in IVF cycles'],
        img: 'lobby.jpg'
    },
    {
        id: 'arthritis',
        title: 'Ayurvedic Arthritis Treatment',
        intro: 'Joint pain that limits your day-to-day life deserves more than a pain killer. Our Ayurvedic arthritis program addresses osteoarthritis, rheumatoid arthritis and gout.',
        symptoms: ['Morning stiffness lasting more than 30 minutes', 'Swelling, warmth and tenderness in joints', 'Reduced range of movement and grip strength'],
        method: ['Internal medicines: Yogaraj Guggulu, Maharasnadi Kashayam', 'External therapies: Janu Basti, Patra Pinda Sweda', 'Structured physiotherapy and joint-friendly yoga'],
        benefits: ['Significant reduction in pain and stiffness', 'Improved joint flexibility and walking comfort', 'Lower dependence on long-term painkillers'],
        img: 'juhu.jpg'
    },
    {
        id: 'spine',
        title: 'Ayurvedic Joints & Spine Treatment',
        intro: 'Back, neck and joint pain often respond beautifully to a combination of classical Ayurvedic therapies and modern movement science. Our spine and joint program offers non-surgical relief.',
        symptoms: ['Radiating pain down the leg or arm', 'Numbness or tingling in fingers or toes', 'Stiff neck or lower back, especially in the morning'],
        method: ['Kati Basti, Greeva Basti and Pizhichil for targeted relief', 'Sahacharadi and Mahanarayan oil-based abhyanga', 'Posture correction and core-strengthening yoga'],
        benefits: ['Strong, lasting pain relief without injections', 'Improved posture, flexibility and core strength', 'Avoided or postponed spine surgery in many cases'],
        img: 'experience.jpg'
    },
    {
        id: 'kidney_failure',
        title: 'Kidney Failure Ayurvedic Treatment',
        intro: 'A diagnosis of kidney failure can feel overwhelming, but it is not the end of options. Our specialised program supports patients across CKD stages 3–5 and those already on dialysis.',
        symptoms: ['Marked swelling in legs, face and abdomen', 'Severe fatigue, breathlessness and itching', 'Steeply rising creatinine and falling GFR'],
        method: ['Comprehensive nephro-Ayurvedic evaluation', 'Tailored protocol with renoprotective herbs and minerals', 'Renal-friendly diet planning by experienced dietitians'],
        benefits: ['Stabilised or slowly improving creatinine', 'Reduced number of dialysis sessions in some cases', 'Better appetite, sleep and overall energy'],
        img: 'bandra.jpg'
    },
    {
        id: 'hypertension',
        title: 'Ayurvedic Hypertension Treatment',
        intro: 'High blood pressure is rarely just about salt. It is a signal that your nervous system, sleep, stress response and circulation are all asking for attention.',
        symptoms: ['Headaches, especially at the back of the head', 'Palpitations, breathlessness on exertion', 'Blurred vision and giddiness'],
        method: ['Detailed BP profiling and 7-day home monitoring', 'Sarpagandha, Jatamansi and Ashwagandha-based formulations', 'Pranayama and meditation taught one-to-one'],
        benefits: ['Smoother daily BP readings without spikes', 'Reduced medication dose in many patients', 'Lower risk of stroke, heart attack and kidney damage'],
        img: 'south_mumbai.jpg'
    }
];

let currentTourStep = 0;
let tourInterval;

function startTourAutoPlay() {
    clearInterval(tourInterval);
    tourInterval = setInterval(() => {
        if (currentTourStep < servicesData.length - 1) {
            currentTourStep++;
        } else {
            currentTourStep = 0;
        }
        animateTourChange();
    }, 3000);
}

function stopTourAutoPlay() {
    clearInterval(tourInterval);
}

function renderServicesMenu() {
    const container = document.getElementById('services-menu-container');
    if(!container) return;
    container.innerHTML = servicesData.map(s => `
        <button onclick="openServicePreview('${s.id}')" class="block w-full text-left px-6 py-4 hover:bg-bg-light group border-b last:border-0 border-primary/5 transition-colors cursor-pointer">
            <div class="font-bold text-[13px] uppercase tracking-wide text-primary group-hover:text-accent transition-colors">${s.title}</div>
            <div class="text-xs text-joshi-dark/60 mt-2 truncate">${s.intro}</div>
        </button>
    `).join('');
}

// Ayurveda Tour Modal Logic
function openAyurvedaTour() {
    const modal = document.getElementById('ayurvedaTourModal');
    const loader = document.getElementById('tourLoader');
    const content = document.getElementById('tourContent');
    
    if(!modal) return;
    
    currentTourStep = 0;
    updateTourUI();
    
    modal.classList.remove('opacity-0', 'pointer-events-none');
    loader.style.opacity = '1';
    loader.style.display = 'flex';
    content.classList.remove('opacity-100', 'translate-y-0');
    content.classList.add('opacity-0', 'translate-y-8');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            content.classList.remove('opacity-0', 'translate-y-8');
            content.classList.add('opacity-100', 'translate-y-0');
            startTourAutoPlay();
        }, 500);
    }, 2500);
}

function closeAyurvedaTour() {
    const modal = document.getElementById('ayurvedaTourModal');
    if(modal) modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
    stopTourAutoPlay();
}

window.openAyurvedaTour = openAyurvedaTour;
window.closeAyurvedaTour = closeAyurvedaTour;

function updateTourUI() {
    const s = servicesData[currentTourStep];
    const ind = document.getElementById('tourStepIndicator');
    if(!ind) return;
    
    ind.innerText = `Step ${currentTourStep + 1} of ${servicesData.length}`;
    document.getElementById('tourTitle').innerText = s.title;
    document.getElementById('tourIntro').innerText = s.intro;
    document.getElementById('tourImage').src = s.img;
    
    document.getElementById('tourBenefits').innerHTML = s.benefits.map((b, i) => `
        <li class="flex items-start gap-3 text-joshi-dark/80">
            <div class="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <span class="text-accent text-xs font-bold">${i + 1}</span>
            </div>
            <span class="text-sm font-medium leading-snug">${b}</span>
        </li>
    `).join('');

    document.getElementById('tourDots').innerHTML = servicesData.map((_, i) => `
        <button onclick="setTourStep(${i})" class="h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentTourStep ? 'w-10 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/60'}"></button>
    `).join('');

    document.getElementById('tourPrevBtn').disabled = false;
    document.getElementById('tourNextBtn').disabled = false;
}

window.nextTourStep = function() {
    if (currentTourStep < servicesData.length - 1) {
        currentTourStep++;
    } else {
        currentTourStep = 0;
    }
    animateTourChange();
    startTourAutoPlay();
}

window.prevTourStep = function() {
    if (currentTourStep > 0) {
        currentTourStep--;
    } else {
        currentTourStep = servicesData.length - 1;
    }
    animateTourChange();
    startTourAutoPlay();
}

window.setTourStep = function(index) {
    if (index !== currentTourStep) {
        currentTourStep = index;
        animateTourChange();
        startTourAutoPlay();
    }
}

function animateTourChange() {
    const img = document.getElementById('tourImage');
    if(img) {
        img.style.opacity = '0';
        setTimeout(() => {
            updateTourUI();
            img.style.opacity = '0.8';
        }, 200);
    }
}

// Service Preview Modal Logic
function openServicePreview(id) {
    const s = servicesData.find(x => x.id === id);
    if(!s) return;

    document.getElementById('previewTitle').innerText = s.title;
    document.getElementById('previewIntro').innerText = s.intro;
    document.getElementById('previewImage').src = s.img;

    document.getElementById('previewSymptoms').innerHTML = s.symptoms.map(sym => `
        <li class="text-sm text-joshi-dark/70 flex items-start gap-3 font-medium">
            <span class="text-red-400 mt-1 shrink-0">•</span>
            <span>${sym}</span>
        </li>
    `).join('');

    document.getElementById('previewMethod').innerHTML = s.method.map(m => `
        <li class="text-sm text-joshi-dark/70 flex items-start gap-3 font-medium">
            <i class="fas fa-check-circle text-accent shrink-0 mt-1"></i>
            <span>${m}</span>
        </li>
    `).join('');

    const modal = document.getElementById('servicePreviewModal');
    const content = document.getElementById('servicePreviewContent');
    
    if(modal && content) {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('translate-y-12');
        content.classList.add('translate-y-0');
        document.body.style.overflow = 'hidden';
    }
}

function closeServicePreview() {
    const modal = document.getElementById('servicePreviewModal');
    const content = document.getElementById('servicePreviewContent');
    
    if(modal && content) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        content.classList.remove('translate-y-0');
        content.classList.add('translate-y-12');
        document.body.style.overflow = '';
    }
}

window.openServicePreview = openServicePreview;
window.closeServicePreview = closeServicePreview;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Logic
    const preloader = document.getElementById('preloader');
    if(preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800); // Wait 800ms to show the nice animation
    }

    renderServicesMenu();

    // 2. Render Services Grid on home page
    const grid = document.getElementById('home-services-grid');
    if (grid) {
        grid.innerHTML = servicesData.map((s, idx) => `
            <div class="reveal-up delay-${(idx%3)*100} group cursor-pointer bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(46,49,146,0.05)] border border-primary/5 hover:shadow-[0_20px_40px_rgba(46,49,146,0.12)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full" onclick="openServicePreview('${s.id}')">
                <div class="aspect-[4/3] overflow-hidden relative bg-primary flex items-center justify-center">
                    <!-- Default Icon (hides on hover) -->
                    <div class="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none">
                        <i class="fas fa-spa text-white/10 text-[8rem]"></i>
                    </div>
                    
                    <!-- Image (reveals on hover/click) -->
                    <img src="${s.img}" class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="${s.title}">
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    
                    <div class="absolute bottom-6 left-6 right-6">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[9px] font-bold tracking-widest uppercase mb-3 border border-white/20 shadow-sm">
                            Ayurvedic Care
                        </div>
                        <h3 class="text-white text-2xl font-bold leading-snug drop-shadow-md">${s.title}</h3>
                    </div>
                </div>
                <div class="p-8 flex flex-col flex-1 bg-white relative z-10">
                    <p class="text-joshi-dark/60 text-[15px] leading-relaxed line-clamp-3 mb-8 flex-1">${s.intro}</p>
                    <div class="flex items-center justify-between mt-auto pt-6 border-t border-primary/5">
                        <span class="text-primary text-[10px] font-bold uppercase tracking-widest group-hover:text-accent transition-colors">
                            Explore Treatment
                        </span>
                        <div class="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                            <i class="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // 3. Centers Carousel Logic
    const centersCarousel = document.getElementById('centers-carousel');
    const centersDotsContainer = document.getElementById('centers-dots');
    if (centersCarousel && centersDotsContainer) {
        centersCarousel.innerHTML = branchesData.map(b => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapsQuery)}`;
            return `
            <a href="${mapsUrl}" target="_blank" class="min-w-full group cursor-pointer text-center block">
                <div class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
                    <img alt="${b.name}" class="w-full h-full object-cover group-hover:scale-110 smooth-transition" src="${b.img}"/>
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div class="bg-white text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                            <i class="fas fa-map-marker-alt"></i> View on Map
                        </div>
                    </div>
                    <div class="absolute top-6 right-6 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-[10px] font-bold uppercase border border-white/30">${b.city}</div>
                </div>
                <h3 class="text-primary text-3xl font-bold mb-3">${b.name}</h3>
                <p class="text-joshi-dark/60 text-lg mb-2"><i class="fas fa-phone text-accent mr-2"></i> ${b.phone}</p>
                <p class="text-joshi-dark/40 text-sm max-w-sm mx-auto line-clamp-2">${b.address}</p>
            </a>`;
        }).join('');

        centersDotsContainer.innerHTML = branchesData.map((_, i) => `
            <div class="center-dot ${i === 0 ? 'w-8 bg-accent' : 'w-2 bg-primary/20'} h-2 rounded-full transition-all duration-300"></div>
        `).join('');

        const centerDots = centersDotsContainer.children;
        let currentCenter = 0;
        setInterval(() => {
            currentCenter = (currentCenter + 1) % branchesData.length;
            centersCarousel.style.transform = `translateX(-${currentCenter * 100}%)`;
            
            Array.from(centerDots).forEach((dot, index) => {
                if (index === currentCenter) {
                    dot.className = 'center-dot w-8 h-2 rounded-full bg-accent transition-all duration-300';
                } else {
                    dot.className = 'center-dot w-2 h-2 rounded-full bg-primary/20 transition-all duration-300';
                }
            });
        }, 3000);
    }

    // 4. Smooth Scroll for Hash Links
    document.querySelectorAll('a').forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                closeAyurvedaTour();
                closeServicePreview();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });

    // 5. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Play once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-zoom').forEach((el) => {
        revealObserver.observe(el);
    });
    
    // 6. Scroll Driven Expansion Logic (Oralic Style)
    function handleScrollExpansion() {
        const wrapper = document.getElementById('scroll-expansion-wrapper');
        const box = document.getElementById('expanding-content-box');
        const content = document.querySelector('.expand-inner-content');
        
        if (!wrapper || !box) return;

        const rect = wrapper.getBoundingClientRect();
        const scrollProgress = Math.min(Math.max(-rect.top / (rect.height - window.innerHeight), 0), 1);

        // Expansion phase (0 to 0.7 progress)
        const expansionProgress = Math.min(scrollProgress / 0.7, 1);
        
        // Target values
        const startW = 85, endW = 100;
        const startH = 80, endH = 100;
        const startR = 48, endR = 0; // 3rem = 48px

        const currentW = startW + (endW - startW) * expansionProgress;
        const currentH = startH + (endH - startH) * expansionProgress;
        const currentR = startR + (endR - startR) * expansionProgress;

        box.style.width = `${currentW}vw`;
        box.style.height = `${currentH}vh`;
        box.style.borderRadius = `${currentR}px`;

        // Content reveal phase (0.5 to 1.0 progress)
        if (scrollProgress > 0.5) {
            content.classList.add('visible');
        } else {
            content.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Existing Parallax
        const heroBg = document.querySelector('.hero-parallax-bg');
        if(heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }

        // New Expansion
        handleScrollExpansion();
    });
});
