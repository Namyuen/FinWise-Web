/* ============================================================
   FinWise — script.js
   Handles: navbar, learn page, modal, tools calculators, quiz
   ============================================================ */

/* ============================================================
   LESSON DATA — 5 modules, 17 lessons total
   ============================================================ */
const LESSONS_DATA = [
  {
    id: 'money-basics',
    title: 'Money Basics',
    description: 'Understand what money is, how it flows, and how to set clear financial goals.',
    iconClass: 'module-icon--violet',
    cardClass: 'lesson-card--violet',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1a2 2 0 0 0 2 2h1"/><path d="M16 11h.01"/></svg>`,
    lessons: [
      {
        id: 'what-is-money',
        title: 'What is Money?',
        explanation: 'Money is a tool that society has agreed to use to exchange value. Before money existed, people bartered — trading goods or services directly. The problem with barter is that it requires a "double coincidence of wants" (you need something I have AND I need something you have). Money solved this by being a universally accepted medium of exchange. Today, money serves three key roles: it is a medium of exchange, a store of value, and a unit of account.',
        example: 'Imagine you grow apples and need shoes. In a barter system, you must find a shoemaker who wants apples. With money, you sell your apples to anyone, take the money, and buy shoes from any shoemaker. Money makes trade infinitely more efficient.',
        keyPoints: [
          'Money is a medium of exchange — it lets people trade without needing the other person to want exactly what you have.',
          'Money is a store of value — you can save it today and use it in the future.',
          'Money is a unit of account — it gives everything a price, making comparison easy.',
          'Modern money (fiat currency) has value because governments back it and society agrees it does.',
          'Inflation slowly erodes the purchasing power of money over time.',
        ],
        quiz: {
          question: 'Which of the following is NOT one of the three main functions of money?',
          options: ['Medium of exchange', 'Store of value', 'Unit of account', 'Guarantee of profit'],
          correctAnswer: 3,
          explanation: 'Money serves three functions: medium of exchange, store of value, and unit of account. It does not guarantee profits — money can lose value over time due to inflation.',
        },
      },
      {
        id: 'income-vs-expenses',
        title: 'Income vs. Expenses',
        explanation: 'Income is every dollar that flows INTO your life. Expenses are every dollar that flows OUT. The relationship between the two determines your financial health. If income exceeds expenses, you have positive cash flow — the foundation of financial stability. If expenses exceed income, you have a deficit that must be covered by debt or savings, which is unsustainable over time. Understanding this gap is the first step to managing money well.',
        example: 'If you earn $1,500 per month from a part-time job but spend $1,700 on rent, food, subscriptions, and going out, you have a $200 monthly deficit. Over 12 months, that\'s $2,400 in the hole — just from everyday living. Many people in this position unknowingly build credit card debt without realizing the root cause.',
        keyPoints: [
          'Income is every dollar coming in — wages, tips, gifts, side hustle revenue.',
          'Expenses are every dollar going out — rent, food, Netflix, coffee, everything.',
          'Positive cash flow (income > expenses) is the foundation of financial health.',
          'Track both for at least one month to understand your real financial picture.',
          'The gap between income and expenses is your opportunity to save and invest.',
        ],
        quiz: {
          question: 'What does it mean to have a "cash flow deficit"?',
          options: [
            'You have more income than expenses',
            'You are spending more than you earn',
            'You have no savings account',
            'Your bank closed your account',
          ],
          correctAnswer: 1,
          explanation: 'A cash flow deficit means you are spending more money than you earn. This forces you to either use savings or take on debt — both of which are unsustainable long-term.',
        },
      },
      {
        id: 'needs-vs-wants',
        title: 'Needs vs. Wants',
        explanation: 'A need is something essential for survival and basic functioning — food, shelter, clothing, healthcare, transportation to work. A want is something that improves your quality of life but is not essential — designer clothes, streaming services, eating out, the latest phone. Confusing the two is one of the most common causes of poor financial decisions. This does not mean you can never spend on wants — it means being intentional and aware of the difference.',
        example: 'You need a phone to stay connected and find work. That\'s a need. But you want the $1,200 iPhone Pro Max when a $400 phone does the same job. The $800 difference, invested at 10% annually for 10 years, becomes $2,075. Every "want" has an opportunity cost.',
        keyPoints: [
          'Needs are essential: food, shelter, clothing, healthcare, basic transportation.',
          'Wants are upgrades: dining out, subscriptions, brand-name items, entertainment.',
          'Both matter — the goal is not to eliminate wants, but to prioritize needs first.',
          'Every dollar spent on a want is a dollar NOT going to savings or investments.',
          'Ask: "Could I survive without this?" If yes, it\'s a want — be intentional about it.',
        ],
        quiz: {
          question: 'Which of the following is a "need" rather than a "want"?',
          options: [
            'A brand new gaming console',
            'Netflix subscription',
            'Groceries for the week',
            'A vacation to Hawaii',
          ],
          correctAnswer: 2,
          explanation: 'Groceries are a need — food is essential for survival. Gaming consoles, streaming services, and vacations are wants: they improve quality of life but are not necessary for basic functioning.',
        },
      },
      {
        id: 'financial-goals',
        title: 'Financial Goals',
        explanation: 'Without clear goals, money tends to disappear. A financial goal is a specific, measurable target for your money — like saving $2,000 for a laptop, paying off $500 in debt, or building a $1,000 emergency fund in 6 months. Goals transform vague wishes into concrete plans with timelines and accountability. Short-term goals (under 1 year) build discipline; long-term goals (1+ years) build wealth.',
        example: '"I want to save money" is a wish. "I will save $1,200 by December 31st by setting aside $100 per month from my part-time job" is a goal. The specific amount, the deadline, and the concrete action (saving $100/month) make it trackable and achievable. Writing it down increases the probability of success by up to 42%, according to research.',
        keyPoints: [
          'Goals should be SMART: Specific, Measurable, Achievable, Relevant, and Time-bound.',
          'Short-term goals (under 1 year): emergency fund, new phone, concert tickets.',
          'Long-term goals (1+ years): college tuition, car, down payment on a house.',
          'Write your goals down — research shows this dramatically increases follow-through.',
          'Review and adjust your goals every 3 months as your situation changes.',
        ],
        quiz: {
          question: 'Which of the following is the best-defined financial goal?',
          options: [
            '"I want to save money someday."',
            '"I will save $600 in 6 months by setting aside $100 per month."',
            '"I hope to have more money eventually."',
            '"I want to be rich."',
          ],
          correctAnswer: 1,
          explanation: 'A good financial goal is SMART — Specific, Measurable, Achievable, Relevant, and Time-bound. "I will save $600 in 6 months by setting aside $100 per month" has a specific amount, a deadline, and a clear action plan. The other options are vague wishes without any way to measure progress.',
        },
      },
    ],
  },

  {
    id: 'budgeting',
    title: 'Budgeting',
    description: 'Learn to create a budget, track your spending, and use the 50/30/20 framework.',
    iconClass: 'module-icon--blue',
    cardClass: 'lesson-card--blue',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    lessons: [
      {
        id: 'creating-a-budget',
        title: 'Creating a Budget',
        explanation: 'A budget is a written plan that tells your money where to go BEFORE the month starts. Instead of spending freely and hoping something is left at the end, you decide in advance how much goes toward housing, food, fun, and savings. A budget does not restrict your freedom — it gives you permission to spend on what matters because you\'ve planned for it. The key is starting with your after-tax income and working downward.',
        example: 'On the 1st of the month, you map out your $1,500 take-home pay: $600 for rent, $300 for food, $150 for transportation, $200 for entertainment, and $250 automatically transferred to savings. Now every dollar has a job. You can spend that $200 on entertainment guilt-free because you\'ve already covered everything else.',
        keyPoints: [
          'Step 1: Add up all monthly income (after taxes).',
          'Step 2: List every expected expense by category.',
          'Step 3: Subtract total expenses from income.',
          'Step 4: Allocate the remainder to savings or debt payoff.',
          'Step 5: Revisit and adjust at the end of each month — no budget is perfect on the first try.',
        ],
        quiz: {
          question: 'What is the main purpose of a monthly budget?',
          options: [
            'To make you feel guilty every time you spend money',
            'To plan where your money goes before you spend it',
            'To track how much debt you owe',
            'To impress your bank manager',
          ],
          correctAnswer: 1,
          explanation: 'A budget is a proactive spending plan — you decide where your money goes BEFORE the month begins. This prevents the common experience of wondering "where did my paycheck go?" It\'s about intention, not restriction.',
        },
      },
      {
        id: 'tracking-expenses',
        title: 'Tracking Expenses',
        explanation: 'Creating a budget is step one. Tracking your actual spending is step two — and most people skip it. Expense tracking means recording every dollar you spend throughout the month and comparing it against your budget. Without tracking, your budget is just a wish list. With tracking, you catch overspending early and can adjust before the damage is done. Modern apps make this nearly automatic by linking to your bank account.',
        example: 'You budgeted $300 for food but it\'s the 15th and you\'ve already spent $280. Without tracking, you\'d discover this on the 30th when your account is empty. With tracking, you catch it mid-month and make adjustments — cook at home for the rest of the month, skip eating out once — and stay within budget.',
        keyPoints: [
          'Review your spending against your budget at least once per week.',
          'Use a budgeting app (Mint, YNAB) or a simple spreadsheet to track everything.',
          'Small purchases add up fast — even $5 coffees ($150/month) can blow a category.',
          'When you go over in a category, look for an offset in another category.',
          'At month-end, review what worked and what to change for next month.',
        ],
        quiz: {
          question: 'Why is tracking actual spending important even if you have a budget?',
          options: [
            'Budgets are enough on their own',
            'It helps you catch overspending early so you can adjust',
            'Banks require you to track spending',
            'It automatically increases your income',
          ],
          correctAnswer: 1,
          explanation: 'A budget without tracking is like a GPS route you never look at. Tracking compares your actual spending to the plan in real time, so you can catch overspending early and course-correct — instead of discovering the problem when your account is empty.',
        },
      },
      {
        id: '50-30-20-rule',
        title: 'The 50/30/20 Rule',
        explanation: 'The 50/30/20 rule is a simple budgeting framework popularized by Senator Elizabeth Warren. Divide your after-tax income into three categories: 50% goes to Needs (housing, food, utilities, healthcare), 30% goes to Wants (dining out, hobbies, subscriptions, travel), and 20% goes to Savings and debt repayment. It\'s not rigid — treat it as a starting guideline you can adjust based on your situation.',
        example: 'Monthly take-home pay: $2,000. Under 50/30/20: $1,000 to needs (rent $700, groceries $200, phone $100), $600 to wants (dining out $200, entertainment $200, clothes $200), $400 to savings/debt ($300 to emergency fund, $100 to credit card). Simple, flexible, and proven.',
        keyPoints: [
          '50% for Needs: rent, utilities, groceries, transportation, minimum debt payments.',
          '30% for Wants: restaurants, streaming, hobbies, shopping, vacations.',
          '20% for Savings: emergency fund, retirement accounts, investments, extra debt payoff.',
          'If housing costs more than 30% of income alone, your city may require adjustments.',
          'Beginners can flip it — even 10/20% savings is excellent when starting out.',
        ],
        quiz: {
          question: 'In the 50/30/20 budget rule, what should 20% of your income go toward?',
          options: [
            'Food and housing',
            'Entertainment and hobbies',
            'Savings and debt repayment',
            'Clothing and transportation',
          ],
          correctAnswer: 2,
          explanation: 'In the 50/30/20 rule: 50% covers needs (housing, food, utilities), 30% covers wants (dining out, entertainment, hobbies), and 20% goes to savings and debt repayment. The 20% savings piece is what builds long-term financial health.',
        },
      },
    ],
  },

  {
    id: 'saving',
    title: 'Saving',
    description: 'Build your emergency fund, automate your savings, and harness the power of compound growth.',
    iconClass: 'module-icon--emerald',
    cardClass: 'lesson-card--emerald',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/><path d="M2 9v1a2 2 0 0 0 2 2h1"/><path d="M16 11h.01"/></svg>`,
    lessons: [
      {
        id: 'emergency-fund',
        title: 'Emergency Funds',
        explanation: 'An emergency fund is money set aside specifically for unexpected expenses: a car repair, a medical bill, or losing your job. Without one, any surprise expense forces you into debt. Financial experts recommend saving 3–6 months of living expenses in a high-yield savings account. This single habit is the difference between a financial emergency being a stressful inconvenience versus a life-altering catastrophe.',
        example: 'Your car needs a $1,200 repair unexpectedly. Without an emergency fund, you put it on a credit card at 24% interest. If it takes 6 months to pay off, you\'ve paid roughly $1,370 total — $170 more than the repair itself. With a $2,000 emergency fund, you simply pay cash, then rebuild the fund over the next few months.',
        keyPoints: [
          'Target: 3–6 months of essential living expenses saved and accessible.',
          'Keep it in a high-yield savings account (separate from checking) so it earns interest.',
          'Do not invest your emergency fund — it must be instantly accessible, not subject to market swings.',
          'Start small: even $500–$1,000 prevents most common emergencies from becoming debt.',
          'After using it, make rebuilding the fund your #1 financial priority.',
        ],
        quiz: {
          question: 'Where should you keep your emergency fund?',
          options: [
            'Invested in stocks for maximum growth',
            'In a high-yield savings account — safe and accessible',
            'Under your mattress',
            'In a 10-year CD you cannot touch',
          ],
          correctAnswer: 1,
          explanation: 'An emergency fund must be instantly accessible, not subject to market drops or withdrawal penalties. A high-yield savings account is the ideal home: your money is safe, earns some interest, and you can withdraw it immediately when needed.',
        },
      },
      {
        id: 'saving-strategies',
        title: 'Saving Strategies',
        explanation: 'The most powerful saving strategy is "pay yourself first." This means the moment you receive a paycheck, you immediately transfer a set amount to savings — before spending on anything else. By removing the money before you can see it in your checking account, you eliminate the temptation to spend it. Automation makes this nearly effortless. Using separate savings accounts for different goals (vacation, car, emergency) also makes progress visible and motivating.',
        example: 'You earn $1,000 on payday. If you wait to save whatever\'s "left over," experience shows most people save little or nothing. Instead, set up an automatic transfer for $150 to savings on payday. Now you live on $850. After 12 months you have $1,800 saved — without ever consciously feeling the sacrifice, because the money left before you could see it.',
        keyPoints: [
          '"Pay yourself first" — save before you spend on anything else.',
          'Automate transfers on payday so savings happen without relying on willpower.',
          'Use separate named accounts for different goals (Emergency, Vacation, Car).',
          'A high-yield savings account earns 4–5x more than a standard bank account.',
          'Increase your savings rate by 1% every time you get a raise.',
        ],
        quiz: {
          question: 'What does "pay yourself first" mean in personal finance?',
          options: [
            'Treat yourself to something expensive before paying bills',
            'Transfer money to savings automatically when you get paid, before spending',
            'Pay off your most expensive bill first',
            'Spend money on hobbies before food',
          ],
          correctAnswer: 1,
          explanation: '"Pay yourself first" means moving a portion of your paycheck to savings immediately — before you spend on anything else. By automating this transfer, saving becomes guaranteed and effortless rather than an afterthought.',
        },
      },
      {
        id: 'compound-interest',
        title: 'Compound Growth',
        explanation: 'Compound growth is earning returns not just on your original investment (principal), but also on the returns you\'ve already accumulated. Albert Einstein reportedly called it "the eighth wonder of the world." The longer your money compounds, the more powerful the effect — because each year\'s growth becomes the base for next year\'s growth. Starting early is the single most impactful financial decision you can make.',
        example: 'At age 18, you invest $1,000 in an index fund averaging 10% annually and never add another dollar. At 65, that single $1,000 grows to roughly $72,890. But if you wait until age 28 to start, that same $1,000 only grows to $28,102 by 65. Ten years of delay cost you $44,788. Time is the most valuable ingredient.',
        keyPoints: [
          'Compound growth = earning returns on your returns, not just your original investment.',
          'The formula: A = P(1 + r)^t where P = principal, r = rate, t = time in years.',
          'Time is more powerful than the amount you invest — start early, even small.',
          'A 10% annual return doubles your money roughly every 7 years (Rule of 72).',
          'Inflation is compound growth working against you — it erodes purchasing power the same way.',
        ],
        quiz: {
          question: 'What is compound growth?',
          options: [
            'Earning interest only on your original deposit',
            'Earning returns on both your original investment AND your accumulated returns',
            'A type of bank account with guaranteed returns',
            'Government-backed growth of savings',
          ],
          correctAnswer: 1,
          explanation: 'Compound growth means earning returns on your returns — your growing balance earns interest, which then earns more interest. Over decades, this creates exponential growth that far exceeds what simple interest (earning only on the original principal) would generate.',
        },
      },
    ],
  },

  {
    id: 'investing',
    title: 'Investing',
    description: 'Understand stocks, bonds, ETFs, and how to balance risk against potential reward.',
    iconClass: 'module-icon--amber',
    cardClass: 'lesson-card--amber',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    lessons: [
      {
        id: 'stocks',
        title: 'Stocks',
        explanation: 'A stock (also called a share or equity) represents partial ownership in a company. When you buy one share of Apple, you literally own a tiny fraction of Apple Inc. If Apple grows its profits and more investors want a piece of it, the stock price rises and your investment becomes more valuable. If the company struggles, the price falls. Stocks are traded on stock exchanges (like the NYSE or NASDAQ) during market hours every weekday.',
        example: 'If you bought 1 share of Apple for $100 in 2015 and held it without touching it, that share would be worth approximately $200 by 2025 — doubling your money over 10 years, plus dividends. During that time, Apple launched new products, grew its services business, and dramatically increased profits. Shareholders were rewarded for believing in and sticking with the company.',
        keyPoints: [
          'Stocks = partial ownership in a real, operating business.',
          'Stock prices rise when a company\'s profits grow or investor confidence increases.',
          'Stocks historically return ~10% per year on average (7% after inflation) over the long run.',
          'Individual stocks are riskier than diversified funds — one bad company can devastate your investment.',
          'You make money through price appreciation (selling higher) and dividends (profit sharing).',
        ],
        quiz: {
          question: 'What do you actually own when you buy a company\'s stock?',
          options: [
            'A loan agreement you lent to the company',
            'A small ownership stake in the company',
            'A guaranteed monthly payment from the company',
            'The right to work at the company',
          ],
          correctAnswer: 1,
          explanation: 'Buying a stock means buying a piece of ownership (equity) in that company. As a stockholder, you benefit when the company\'s value grows, and you may receive dividends — a share of company profits. Unlike bonds, there is no guaranteed return.',
        },
      },
      {
        id: 'bonds',
        title: 'Bonds',
        explanation: 'When you buy a bond, you are acting as a lender — not an owner. A company or government borrows your money and promises to repay it after a fixed period (the "maturity date"), plus regular interest payments (called "coupon payments") along the way. Bonds are generally safer than stocks because the payments are contractually fixed and predictable. In exchange for that safety, the returns are lower than stocks over the long run.',
        example: 'The U.S. government issues a 10-year Treasury bond with a 4.5% annual interest rate. You invest $1,000. Every year you receive $45 in interest. After 10 years, you get your $1,000 back. Total earned: $450 in interest over 10 years. You knew exactly what you\'d earn from day one — zero surprises, unlike stocks whose value fluctuates daily.',
        keyPoints: [
          'Bonds = lending money to a company or government in exchange for interest payments.',
          'Returns are fixed and predictable — you know upfront exactly what you\'ll earn.',
          'Lower risk than stocks, but also lower long-term returns.',
          'Bond prices move opposite to interest rates: when rates rise, bond prices fall.',
          'Bonds reduce portfolio volatility — used alongside stocks to smooth out ups and downs.',
        ],
        quiz: {
          question: 'When you buy a bond, you are essentially doing what?',
          options: [
            'Buying ownership in a company',
            'Lending money to a company or government in exchange for interest',
            'Gambling on stock price movements',
            'Opening a new type of savings account',
          ],
          correctAnswer: 1,
          explanation: 'A bond is a loan you make to a company or government. They pay you back with interest over a fixed period. Unlike stocks (ownership), bonds are debt instruments — you are a creditor, not an owner, which is why they are generally safer but lower-returning.',
        },
      },
      {
        id: 'etfs',
        title: 'ETFs (Index Funds)',
        explanation: 'An Exchange-Traded Fund (ETF) is a basket of many assets — stocks, bonds, or both — bundled into a single investment you can buy like a regular stock. An index ETF tracks a market index, such as the S&P 500 (the 500 largest US companies), automatically holding a tiny piece of each company in the index. This gives you instant diversification across hundreds of businesses with a single purchase at very low cost. Most professional fund managers consistently fail to beat index ETFs over the long term.',
        example: 'The S&P 500 ETF (ticker: VOO or SPY) holds a sliver of Apple, Microsoft, Amazon, Google, and 496 other companies. If one company goes bankrupt, your loss is less than 0.5% because the other 499 companies carry the weight. If the whole US economy grows, you grow with it. This is why Warren Buffett recommends index funds for most people.',
        keyPoints: [
          'ETFs = instant diversification across dozens or hundreds of companies in one purchase.',
          'Index ETFs have very low annual fees (often 0.03%–0.20%) vs. actively managed funds (1%+).',
          'Consistently outperform most professional fund managers over 10+ year periods.',
          'Traded on exchanges like regular stocks — buy or sell anytime during market hours.',
          'Ideal for long-term, passive investing — buy regularly and hold for decades.',
        ],
        quiz: {
          question: 'Why is an S&P 500 ETF generally less risky than owning one company\'s stock?',
          options: [
            'It is insured by the US government',
            'Your money is spread across 500 companies, so no single failure devastates you',
            'It guarantees a fixed return each year',
            'ETFs have no risk at all',
          ],
          correctAnswer: 1,
          explanation: 'An S&P 500 ETF holds a tiny piece of 500 different companies. If one company fails, it affects only a small fraction of your investment. Owning a single stock means a company\'s bankruptcy could wipe out your entire investment in that position. Diversification dramatically reduces this "single company" risk.',
        },
      },
      {
        id: 'risk-and-reward',
        title: 'Risk and Reward',
        explanation: 'In investing, risk and reward are inseparably linked. Higher potential returns always come with higher potential losses — there is no such thing as a high-return, zero-risk investment. Stocks are riskier than bonds but grow more over decades. Cash in a bank is the "safest" but loses value to inflation every year. Understanding your risk tolerance — how much short-term loss you can stomach emotionally and financially — is essential to building a portfolio you won\'t panic-sell during a downturn.',
        example: '$10,000 invested in US Treasury bonds grew to approximately $14,000 over 10 years at 3.5% annually. The same $10,000 invested in the S&P 500 grew to approximately $26,000 at ~10% annually — but it dipped to $6,000 during the 2009 crisis and $7,000 during the 2020 crash. The investor who held on through those terrifying drops ended up nearly doubling the bond investor\'s return. Panicking and selling at the bottom locked in losses permanently.',
        keyPoints: [
          'Higher risk = higher potential reward (not guaranteed, but historically true over long periods).',
          'Lower risk = lower potential reward — safety has a cost called "opportunity cost."',
          'Diversification spreads risk across many investments, reducing the impact of any single failure.',
          'Time in the market reduces risk — short-term crashes historically recover over 5–10 years.',
          'Never invest money you cannot afford to leave untouched for at least 3–5 years.',
        ],
        quiz: {
          question: 'Which investment type generally offers the highest long-term returns AND the highest short-term risk?',
          options: [
            'A high-yield savings account',
            'Government Treasury bonds',
            'Stocks (equity investments)',
            'Cash kept at home',
          ],
          correctAnswer: 2,
          explanation: 'Stocks historically generate the highest long-term returns (~10%/year for the S&P 500) but also experience the most dramatic short-term swings — sometimes dropping 30–50% during recessions. This risk-reward tradeoff is fundamental: higher potential returns require accepting higher short-term volatility.',
        },
      },
    ],
  },

  {
    id: 'real-world',
    title: 'Real World Finance',
    description: 'Navigate credit cards, loans, taxes, and protect yourself from financial scams.',
    iconClass: 'module-icon--rose',
    cardClass: 'lesson-card--rose',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    lessons: [
      {
        id: 'credit-cards',
        title: 'Credit Cards',
        explanation: 'A credit card lets you borrow money for purchases and pay it back later. Used correctly, credit cards are powerful tools: they build your credit score (which unlocks better loan rates for cars and homes), offer rewards points, and provide purchase protections. Used carelessly, they become debt traps — credit card interest rates average 20–25% annually, meaning carrying a balance makes everything you buy significantly more expensive.',
        example: 'You charge $1,000 to a credit card at 24% APR and only pay the $25 minimum each month. It takes 5 years to pay it off, and you end up paying $1,500 total — 50% more than your original purchase. But if you pay the FULL balance every month, you pay zero interest, earn rewards points, and build credit for free.',
        keyPoints: [
          'Pay the FULL balance every month — never just the minimum — to avoid interest.',
          'Credit card APR (interest rate) typically ranges from 18–30% annually.',
          'Your credit utilization (balance ÷ credit limit) affects your credit score — keep it below 30%.',
          'Benefits of smart credit card use: credit building, rewards, travel miles, fraud protection.',
          'Never spend money on a credit card you don\'t already have in your bank account.',
        ],
        quiz: {
          question: 'What is the most important rule for using a credit card without going into debt?',
          options: [
            'Only use it for emergencies',
            'Pay the full balance every month before the due date',
            'Keep the credit limit as high as possible',
            'Only use it at stores you like',
          ],
          correctAnswer: 1,
          explanation: 'Paying your full credit card balance every month means you pay zero interest — you\'re essentially using the bank\'s money for free for up to 30 days. Carrying a balance triggers interest rates of 18–30%, making everything you bought significantly more expensive over time.',
        },
      },
      {
        id: 'loans',
        title: 'Loans',
        explanation: 'A loan is borrowed money you must repay with interest over a set time period. The interest rate determines how expensive borrowing is — a small difference in rate has a massive impact on the total you repay. Always calculate the total repayment amount (not just the monthly payment) before signing a loan. Student loans, car loans, and mortgages are common types. The lender\'s business model depends on you not fully understanding the total cost.',
        example: 'A $25,000 car loan at 5% interest over 5 years costs $28,307 total — $3,307 in interest. The same loan at 10% interest costs $31,869 total — $6,869 in interest. Just 5% more in interest rate costs an extra $3,562 on a $25,000 loan. A 30-year $300,000 mortgage at 7% means you repay over $719,000 total — more than double what you borrowed.',
        keyPoints: [
          'Always compare the Annual Percentage Rate (APR), not just the monthly payment.',
          'Longer loan terms = lower monthly payments BUT much more interest paid overall.',
          'Paying extra toward the loan principal reduces total interest and shortens the loan.',
          'Good debt (affordable education, home) can increase net worth; bad debt (payday loans) destroys it.',
          'Payday loans charge 300–600% APR — avoid them at all costs.',
        ],
        quiz: {
          question: 'What does a loan\'s APR (Annual Percentage Rate) tell you?',
          options: [
            'How much you originally borrowed',
            'The true annual cost of borrowing, including interest and fees',
            'How quickly you can pay it off',
            'Your current credit score',
          ],
          correctAnswer: 1,
          explanation: 'APR (Annual Percentage Rate) is the true yearly cost of a loan — it includes both the interest rate AND any fees, giving you an accurate comparison between different loan offers. Always use APR (not just the interest rate) to compare loans, because fees can add significant cost that the interest rate alone does not capture.',
        },
      },
      {
        id: 'taxes',
        title: 'Taxes',
        explanation: 'Taxes are mandatory payments to the government taken from income, purchases, and investment gains. Income tax is often withheld directly from your paycheck — which is why your take-home pay is less than your salary. Understanding taxes prevents major surprises: your $15/hour job likely brings home closer to $12–13/hour after federal, state, and other withholdings. You file a tax return every spring to reconcile what was withheld against what you actually owe.',
        example: 'You earn $12,000 from a part-time job over the year. At a 12% effective federal tax rate plus state taxes, roughly $1,800 goes to taxes. Your $12,000 gross income becomes approximately $10,200 take-home. Always base your budget on your after-tax (net) income — not the gross salary advertised in job listings.',
        keyPoints: [
          'Gross income = what you earn before taxes. Net income = what you actually take home.',
          'Your W-2 form (from your employer) shows your total earnings and taxes withheld.',
          'Tax returns are due April 15th each year — file even if you don\'t owe, you might get a refund.',
          'Tax-advantaged accounts (Roth IRA, 401k) let your money grow tax-free or tax-deferred.',
          'Free filing tools: IRS Free File for income under $73,000; many states have free options.',
        ],
        quiz: {
          question: 'What is the key difference between "gross income" and "net income"?',
          options: [
            'They are the same thing listed on different forms',
            'Gross is what you earn before taxes; net is what you actually take home after deductions',
            'Gross is government money; net is your salary',
            'Net income is always higher than gross income',
          ],
          correctAnswer: 1,
          explanation: 'Gross income is your full earnings before any deductions. Net income (take-home pay) is what remains after income taxes, Social Security, Medicare, and other withholdings are subtracted. Always build your budget around net income — gross is what you earn, net is what you actually have to spend.',
        },
      },
      {
        id: 'financial-scams',
        title: 'Financial Scams',
        explanation: 'Financial scams are designed to steal your money by exploiting emotions — greed, fear, urgency, or trust. The golden rule: if it sounds too good to be true, it is. Common scams include Ponzi schemes (fraudsters pay early investors with new investors\' money until the scheme collapses), phishing (fake emails or texts pretending to be your bank), and "guaranteed high returns" investment fraud. Young people are increasingly targeted online, especially through social media.',
        example: '"Invest $500 and earn 25% monthly guaranteed returns — limited spots available, act NOW!" Real investments have no guarantees. Even Warren Buffett averages ~20% annually over a lifetime — 25% per MONTH would be nearly 1,500% per year. The SEC considers any investment claiming "guaranteed" returns a massive red flag. This is almost certainly a Ponzi scheme that will collapse, taking your money with it.',
        keyPoints: [
          'No legitimate investment guarantees unusually high returns (25%+ monthly is impossible).',
          'Urgency and pressure tactics ("Act now! Limited spots!") are manipulation designed to stop you from thinking.',
          'Verify any investment opportunity at SEC.gov (EDGAR) or FINRA.org before giving anyone money.',
          'Never send money — especially crypto or wire transfers — to people you only know online.',
          'Report suspected fraud to the FTC (reportfraud.ftc.gov) and SEC (sec.gov/tcr).',
        ],
        quiz: {
          question: 'Which phrase is the biggest red flag indicating a likely financial scam?',
          options: [
            '"We charge a small annual management fee of 0.5%"',
            '"Investment returns may go up or down"',
            '"Guaranteed 30% monthly returns with absolutely zero risk"',
            '"This fund is registered with the SEC"',
          ],
          correctAnswer: 2,
          explanation: '"Guaranteed 30% monthly returns with zero risk" is the clearest possible scam signal. Legitimate investments always carry risk and never guarantee specific returns. 30% monthly would be 1,260%+ annually — mathematically impossible in any legitimate market. Any investment claiming guaranteed high returns is almost certainly fraud.',
        },
      },
    ],
  },
];

/* ============================================================
   QUIZ QUESTIONS — 20 questions across all 5 modules
   ============================================================ */
const QUIZ_QUESTIONS = [
  { question: 'Which of the following is a "need" rather than a "want"?', options: ['Monthly streaming subscription', 'Rent payment', 'Designer sneakers', 'Vacation package'], correct: 1, explanation: 'Rent is a need — shelter is essential for survival. Streaming services, designer items, and vacations are wants that improve quality of life but are not necessary for basic functioning.' },
  { question: 'What does the "20" in the 50/30/20 budget rule represent?', options: ['20% for entertainment and dining', '20% for transportation and clothing', '20% for savings and debt repayment', '20% for utilities and groceries'], correct: 2, explanation: 'In the 50/30/20 rule: 50% covers needs, 30% covers wants, and 20% goes to savings and debt repayment. This 20% is what builds long-term financial security.' },
  { question: 'What is compound interest?', options: ['Interest paid only on your original deposit', 'Interest earned on both your principal AND previously earned interest', 'A bank fee charged on savings accounts', 'A type of government bond'], correct: 1, explanation: 'Compound interest means you earn interest on your growing balance — including previously earned interest. Over decades, this creates exponential growth dramatically greater than simple interest.' },
  { question: 'Where is the best place to keep an emergency fund?', options: ['Invested in the stock market for growth', 'In a high-yield savings account — safe and accessible', 'Locked in a 10-year CD', 'In cryptocurrency for potential upside'], correct: 1, explanation: 'An emergency fund must be instantly accessible and safe from market swings. A high-yield savings account provides safety, liquidity, and some interest — making it the ideal location.' },
  { question: 'What happens to your money if you only pay the minimum on a credit card?', options: ['The remaining balance disappears after 12 months', 'You avoid all interest charges', 'You pay high interest and it takes much longer to pay off the debt', 'The bank upgrades your credit limit automatically'], correct: 2, explanation: 'Paying only the minimum means most of your payment goes toward interest, not principal. At 20–25% APR, debt can take years (or decades) to pay off, costing significantly more than the original purchase.' },
  { question: 'What does APR stand for, and why does it matter for loans?', options: ['Annual Payment Rate — it shows the minimum payment', 'Annual Percentage Rate — it shows the true yearly cost of borrowing', 'Average Principal Return — it shows investment growth', 'Automatic Payment Record — it shows payment history'], correct: 1, explanation: 'APR (Annual Percentage Rate) represents the total yearly cost of a loan including interest and fees. It\'s the most accurate way to compare loan offers — a lower APR means a cheaper loan overall.' },
  { question: 'What is a stock?', options: ['A loan you make to a company', 'A government savings bond', 'A small ownership stake in a company', 'A guaranteed fixed-income investment'], correct: 2, explanation: 'A stock (or share) represents fractional ownership in a company. As the company grows and becomes more profitable, the value of your ownership stake typically increases.' },
  { question: 'What is the key difference between a stock and a bond?', options: ['Stocks are safer; bonds are riskier', 'Stocks = ownership; bonds = lending money to a company or government', 'Bonds always pay higher returns than stocks', 'There is no meaningful difference'], correct: 1, explanation: 'Stocks make you an owner (equity); bonds make you a lender (debt). Owners share in company growth but take more risk. Lenders receive fixed interest payments but don\'t benefit from company growth.' },
  { question: 'Why do index ETFs often outperform actively managed funds over the long term?', options: ['They take more risk by picking individual stocks', 'They are government guaranteed', 'They have very low fees and broad diversification that\'s hard to beat consistently', 'They only invest in the safest government bonds'], correct: 2, explanation: 'Index ETFs track the overall market with minimal fees (0.03–0.20%). Actively managed funds charge 1%+ in fees and most fail to consistently beat the market. Over decades, lower fees compound into dramatically better returns.' },
  { question: 'What does "pay yourself first" mean?', options: ['Buy yourself a treat before paying any bills', 'Automatically save money before spending on anything else', 'Pay off your most expensive purchases first', 'Work overtime before going home'], correct: 1, explanation: '"Pay yourself first" means immediately moving money to savings when you get paid — before spending on anything else. Automating this transfer removes the temptation to spend first and save whatever\'s left (which is usually nothing).' },
  { question: 'What is the "Rule of 72" in investing?', options: ['You must wait 72 months before withdrawing investments', 'Divide 72 by your annual return to estimate years to double your money', 'Save 72% of each paycheck', 'Invest 72% in stocks and 28% in bonds'], correct: 1, explanation: 'The Rule of 72 is a shortcut: divide 72 by your annual return rate to estimate how many years it takes to double your money. At 10% returns, 72 ÷ 10 = 7.2 years to double. At 6%, it takes 12 years.' },
  { question: 'What is gross income vs. net income?', options: ['They are the same — both appear on your paycheck', 'Gross is earnings before taxes; net is take-home pay after deductions', 'Net income is always higher because it includes bonuses', 'Gross income is what you earn per hour; net is annually'], correct: 1, explanation: 'Gross income is your total earnings before any deductions. Net income (take-home pay) is what remains after income taxes, Social Security, Medicare, and other withholdings. Always budget based on your net income.' },
  { question: 'Which investment type typically provides the highest long-term returns over 20+ years?', options: ['Savings accounts', 'Government bonds', 'Stocks (equities)', 'Cash stored at home'], correct: 2, explanation: 'Historically, stocks (equities) have provided the highest long-term returns — approximately 10% annually for the S&P 500. While they experience short-term volatility, investors who hold through market cycles are significantly rewarded over decades.' },
  { question: 'A financial goal that follows the "SMART" framework should be:', options: ['Vague and open-ended to allow flexibility', 'Specific, Measurable, Achievable, Relevant, and Time-bound', 'Only about long-term retirement planning', 'Set by a financial advisor, not by you'], correct: 1, explanation: 'SMART goals are: Specific (clear target), Measurable (trackable number), Achievable (realistic), Relevant (meaningful to you), and Time-bound (deadline). This framework dramatically increases the probability of achieving financial goals.' },
  { question: 'What is the biggest warning sign of a financial scam?', options: ['The investment charges a small management fee', 'Returns may vary based on market conditions', 'Guaranteed 50% monthly returns with zero risk', 'The investment is registered with the SEC'], correct: 2, explanation: '"Guaranteed" high returns with "zero risk" is the clearest red flag of financial fraud. No legitimate investment can guarantee specific returns, especially at rates far above market averages. This pattern defines Ponzi schemes and investment fraud.' },
  { question: 'How long should you ideally have as an emergency fund?', options: ['1 week of expenses', '1 month of expenses', '3–6 months of living expenses', '5 years of savings'], correct: 2, explanation: 'Financial experts recommend 3–6 months of essential living expenses. This covers common emergencies — job loss, medical bills, major car repair — without forcing you into high-interest debt. Start with $1,000 if 3–6 months feels overwhelming.' },
  { question: 'What is inflation, and why does it matter?', options: ['Inflation is when your income grows faster than expenses', 'Inflation is the gradual rise in prices that erodes money\'s purchasing power over time', 'Inflation is a type of savings account interest', 'Inflation only affects wealthy people'], correct: 1, explanation: 'Inflation is the general rise in prices over time, meaning $100 today buys less than $100 did 10 years ago. At 3% inflation, prices double roughly every 24 years. This is why keeping money in cash long-term is risky — its real value slowly erodes.' },
  { question: 'What is diversification in investing?', options: ['Putting all your money into the one best investment', 'Spreading money across multiple investments to reduce risk', 'Only investing in government bonds', 'Changing investments every month based on news'], correct: 1, explanation: 'Diversification means spreading investments across different assets, sectors, and geographies. If one investment fails, the others cushion the blow. Index ETFs provide automatic diversification across hundreds of companies with a single purchase.' },
  { question: 'Which of the following is an example of "good debt"?', options: ['A payday loan at 400% interest', 'Credit card balance carried from month to month', 'An affordable student loan for a degree that increases earning potential', 'Buy-now-pay-later on luxury purchases'], correct: 2, explanation: 'Good debt is borrowing that increases your net worth or earning potential — like an affordable student loan for a high-demand career. Bad debt is high-interest borrowing for things that don\'t increase in value (payday loans, credit card balances, luxury items).' },
  { question: 'What is the most powerful factor in building long-term wealth through investing?', options: ['Picking the right individual stocks', 'Starting to invest as early as possible, even small amounts', 'Timing the market to buy at the exact right moment', 'Investing only in real estate'], correct: 1, explanation: 'Time in the market is the most powerful wealth-building factor. Due to compound growth, $1,000 invested at age 18 can grow to $72,000+ by retirement. Starting 10 years later can reduce that by more than half. Starting early, even with small amounts, is the single most impactful financial decision.' },
];

/* ============================================================
   DOM UTILITIES
   ============================================================ */
const $ = (id) => document.getElementById(id);
const fmt = (n) => '$' + Math.round(n).toLocaleString();

/* ============================================================
   NAVBAR — mobile toggle & active link
   ============================================================ */
function initNavbar() {
  const toggle   = $('nav-toggle');
  const mobileMenu = $('nav-mobile-menu');
  const iconMenu = $('nav-icon-menu');
  const iconClose = $('nav-icon-close');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      iconMenu.style.display  = isOpen ? 'none'  : 'inline';
      iconClose.style.display = isOpen ? 'inline' : 'none';
    });
  }

  // Mark active link
  const links = document.querySelectorAll('.navbar__link, .navbar__mobile-link');
  const path  = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach((link) => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === path) link.classList.add('active');
  });
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  els.forEach((el) => observer.observe(el));
}

/* ============================================================
   LEARN PAGE
   ============================================================ */
function initLearnPage() {
  const container = $('modules-container');
  if (!container) return;

  const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`;
  const checkSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

  LESSONS_DATA.forEach((module) => {
    const section = document.createElement('div');
    section.className = 'module-section';

    const lessonCards = module.lessons.map((lesson) => `
      <div class="lesson-card ${module.cardClass}" onclick="openModal('${lesson.id}', '${module.id}')" role="button" tabindex="0">
        <div class="lesson-card__header">
          <span class="lesson-card__title">${lesson.title}</span>
          <span class="lesson-card__arrow">${arrowSVG}</span>
        </div>
        <p class="lesson-card__desc">${lesson.explanation.slice(0, 110)}…</p>
      </div>
    `).join('');

    section.innerHTML = `
      <div class="module-header">
        <div class="module-icon ${module.iconClass}">${module.icon}</div>
        <div class="module-header-text">
          <h2>${module.title}</h2>
          <p>${module.description}</p>
        </div>
      </div>
      <div class="lessons-grid">${lessonCards}</div>
    `;

    container.appendChild(section);
  });

  // keyboard support for lesson cards
  document.querySelectorAll('.lesson-card').forEach((card) => {
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') card.click(); });
  });
}

/* ============================================================
   MODAL
   ============================================================ */
let _currentQuiz = null;
let _selectedOption = null;

function openModal(lessonId, moduleId) {
  const module = LESSONS_DATA.find((m) => m.id === moduleId);
  const lesson = module && module.lessons.find((l) => l.id === lessonId);
  if (!lesson) return;

  _currentQuiz   = lesson.quiz;
  _selectedOption = null;

  const checkSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;

  $('modal-title').textContent = lesson.title;
  $('modal-explanation').textContent = lesson.explanation;
  $('modal-example').textContent = lesson.example;

  const kpEl = $('modal-keypoints');
  kpEl.innerHTML = lesson.keyPoints.map((kp) => `<li>${checkSVG}<span>${kp}</span></li>`).join('');

  $('modal-quiz-question').textContent = lesson.quiz.question;

  const optEl = $('modal-quiz-options');
  optEl.innerHTML = lesson.quiz.options.map((opt, i) => `
    <button class="quiz-option" data-index="${i}" onclick="selectQuizOption(this, ${i})">
      <span>${opt}</span>
    </button>
  `).join('');

  const submitBtn = $('modal-quiz-submit');
  submitBtn.disabled = true;
  submitBtn.onclick = submitQuiz;

  const resultEl = $('modal-quiz-result');
  resultEl.style.display = 'none';
  resultEl.innerHTML = '';

  const overlay = $('lesson-modal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectQuizOption(btn, index) {
  document.querySelectorAll('#modal-quiz-options .quiz-option').forEach((b) => b.classList.remove('selected'));
  btn.classList.add('selected');
  _selectedOption = index;
  $('modal-quiz-submit').disabled = false;
}

function submitQuiz() {
  if (_selectedOption === null || !_currentQuiz) return;

  const isCorrect = _selectedOption === _currentQuiz.correctAnswer;
  const submitBtn = $('modal-quiz-submit');
  submitBtn.disabled = true;

  const correctSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  const wrongSVG   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`;

  document.querySelectorAll('#modal-quiz-options .quiz-option').forEach((btn, i) => {
    btn.disabled = true;
    if (i === _currentQuiz.correctAnswer) {
      btn.classList.add('correct');
      btn.innerHTML += correctSVG;
    } else if (i === _selectedOption && !isCorrect) {
      btn.classList.add('wrong');
      btn.innerHTML += wrongSVG;
    } else {
      btn.classList.add('dimmed');
    }
  });

  const resultEl = $('modal-quiz-result');
  resultEl.style.display = 'block';
  resultEl.className = `quiz-result quiz-result--${isCorrect ? 'correct' : 'wrong'}`;
  resultEl.innerHTML = `
    <div class="quiz-result__status">
      ${isCorrect ? correctSVG + ' Correct!' : wrongSVG + ' Not quite'}
    </div>
    <p>${_currentQuiz.explanation}</p>
  `;
}

function closeModal() {
  const overlay = $('lesson-modal');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ============================================================
   TOOLS PAGE — CALCULATORS
   ============================================================ */
function switchTab(tab) {
  ['budget', 'compound', 'savings'].forEach((t) => {
    const btn   = $(`tab-${t}`);
    const panel = $(`panel-${t}`);
    if (!btn || !panel) return;
    const isActive = t === tab;
    panel.classList.toggle('active', isActive);
    btn.className = 'tab-btn' + (isActive ? ' active--' + (t === 'budget' ? 'violet' : t === 'compound' ? 'amber' : 'green') : '');
  });

  if (tab === 'compound') setTimeout(calcCompound, 50);
  if (tab === 'savings')  calcSavings();
}

/* ---- Budget Calculator ---- */
function calcBudget() {
  const income = parseFloat($('income').value) || 0;
  const expenses = ['rent','food','transport','entertainment','other']
    .reduce((sum, id) => sum + (parseFloat($(id).value) || 0), 0);
  const leftover = income - expenses;
  const rate = income > 0 ? Math.max(0, Math.min(100, (leftover / income) * 100)) : 0;

  $('b-income').textContent   = fmt(income);
  $('b-expenses').textContent = fmt(expenses);
  $('b-leftover').textContent = fmt(leftover);
  $('b-annual').textContent   = fmt(leftover * 12);
  $('b-rate-pct').textContent = Math.round(rate) + '%';
  $('b-rate-bar').style.width = rate + '%';

  const tile = $('b-leftover-tile');
  tile.className = 'summary-tile ' + (leftover >= 0 ? 'summary-tile--green' : 'summary-tile--red');
}

/* ---- Compound Interest Calculator ---- */
let _ciChart = null;

function calcCompound() {
  const P = parseFloat($('ci-principal').value) || 0;
  const m = parseFloat($('ci-monthly').value)   || 0;
  const r = (parseFloat($('ci-rate').value) || 7) / 100;
  const t = parseInt($('ci-years').value)   || 20;

  const monthly  = r / 12;
  const months   = t * 12;
  const future   = P * Math.pow(1 + monthly, months) + m * ((Math.pow(1 + monthly, months) - 1) / monthly);
  const invested = P + m * months;
  const interest = future - invested;

  $('ci-future').textContent   = fmt(future);
  $('ci-invested').textContent = fmt(invested);
  $('ci-interest').textContent = fmt(interest);

  // Chart
  const labels = [];
  const totalData = [];
  const contribData = [];
  for (let yr = 0; yr <= t; yr++) {
    const mo = yr * 12;
    const fv = P * Math.pow(1 + monthly, mo) + (mo > 0 ? m * ((Math.pow(1 + monthly, mo) - 1) / monthly) : 0);
    labels.push(yr === 0 ? 'Now' : `Yr ${yr}`);
    totalData.push(Math.round(fv));
    contribData.push(Math.round(P + m * mo));
  }

  const ctx = $('ci-chart');
  if (!ctx) return;
  if (_ciChart) _ciChart.destroy();
  _ciChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Total Value', data: totalData, borderColor: '#7c3aed', backgroundColor: 'rgba(124,58,237,0.12)', fill: true, tension: 0.4, pointRadius: 3 },
        { label: 'Contributions', data: contribData, borderColor: '#f59e0b', backgroundColor: 'transparent', borderDash: [5,5], tension: 0.1, pointRadius: 0 },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: true, position: 'top' } },
      scales: {
        y: { ticks: { callback: (v) => '$' + (v >= 1000 ? (v/1000).toFixed(0)+'k' : v) }, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false }, ticks: { maxTicksLimit: 10 } },
      },
    },
  });
}

/* ---- Savings Goal Calculator ---- */
function calcSavings() {
  const goal    = parseFloat($('sg-goal').value)    || 1;
  const saved   = parseFloat($('sg-saved').value)   || 0;
  const monthly = parseFloat($('sg-monthly').value) || 1;

  const remaining = Math.max(0, goal - saved);
  const pct = Math.min(100, (saved / goal) * 100);
  const months = remaining <= 0 ? 0 : Math.ceil(remaining / monthly);
  const years  = (months / 12).toFixed(1);

  $('sg-months').innerHTML = remaining <= 0
    ? ''
    : months + '<span class="unit">months</span>';
  $('sg-years-note').textContent = remaining <= 0 ? '' : `That\'s ${years} years`;
  $('sg-pct-label').textContent  = Math.round(pct) + '%';
  $('sg-bar').style.width        = pct + '%';
  $('sg-saved-display').textContent = fmt(saved) + ' saved of ' + fmt(goal) + ' goal';

  const reachedEl = $('sg-reached-msg');
  const preamble  = document.querySelector('.savings-result .preamble');
  const monthsEl  = $('sg-months');
  const yearsEl   = $('sg-years-note');

  if (reachedEl && preamble) {
    if (remaining <= 0) {
      reachedEl.style.display = 'block';
      preamble.style.display  = 'none';
      monthsEl.style.display  = 'none';
      yearsEl.style.display   = 'none';
    } else {
      reachedEl.style.display = 'none';
      preamble.style.display  = '';
      monthsEl.style.display  = '';
      yearsEl.style.display   = '';
    }
  }
}

/* ============================================================
   QUIZ PAGE — Full 20-question quiz
   ============================================================ */
let _qIndex   = 0;
let _qScore   = 0;
let _answered = false;

function initQuizPage() {
  const startBtn = $('quiz-start-btn');
  const retryBtn = $('quiz-retry-btn');
  if (startBtn) startBtn.addEventListener('click', startQuiz);
  if (retryBtn) retryBtn.addEventListener('click', () => { resetQuiz(); startQuiz(); });
}

function startQuiz() {
  $('quiz-start').style.display  = 'none';
  $('quiz-results').style.display = 'none';
  $('quiz-area').style.display   = '';
  _qIndex = 0; _qScore = 0;
  renderQuestion();
}

function resetQuiz() {
  _qIndex = 0; _qScore = 0; _answered = false;
}

function renderQuestion() {
  const q    = QUIZ_QUESTIONS[_qIndex];
  const total = QUIZ_QUESTIONS.length;
  _answered   = false;

  // Progress
  const pct = (_qIndex / total) * 100;
  $('quiz-progress-bar').style.width = pct + '%';
  $('quiz-q-counter').textContent    = `Question ${_qIndex + 1} of ${total}`;
  $('quiz-score-live').textContent   = `Score: ${_qScore}`;

  $('quiz-question-text').textContent = q.question;

  const optCont = $('quiz-options-container');
  optCont.innerHTML = q.options.map((opt, i) => `
    <button class="quiz-option" data-index="${i}" onclick="handleQuizAnswer(this, ${i})">
      <span>${opt}</span>
    </button>
  `).join('');

  const feedback = $('quiz-feedback');
  feedback.style.display = 'none';
  feedback.innerHTML = '';
  feedback.className = '';

  const nextBtn = $('quiz-next-btn');
  nextBtn.style.display = 'none';
  nextBtn.onclick = advanceQuiz;
}

function handleQuizAnswer(btn, index) {
  if (_answered) return;
  _answered = true;

  const q = QUIZ_QUESTIONS[_qIndex];
  const isCorrect = index === q.correct;
  if (isCorrect) _qScore++;

  const correctSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  const wrongSVG   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`;

  document.querySelectorAll('#quiz-options-container .quiz-option').forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct) {
      b.classList.add('correct');
      b.querySelector('span').insertAdjacentHTML('afterend', correctSVG);
    } else if (i === index && !isCorrect) {
      b.classList.add('wrong');
      b.querySelector('span').insertAdjacentHTML('afterend', wrongSVG);
    } else {
      b.classList.add('dimmed');
    }
  });

  const feedback = $('quiz-feedback');
  feedback.style.display = '';
  feedback.className = isCorrect ? 'correct' : 'wrong';
  feedback.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Not quite.'}</strong> ${q.explanation}`;

  $('quiz-score-live').textContent = `Score: ${_qScore}`;
  $('quiz-next-btn').style.display = '';
}

function advanceQuiz() {
  _qIndex++;
  if (_qIndex >= QUIZ_QUESTIONS.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  $('quiz-area').style.display    = 'none';
  $('quiz-results').style.display = '';

  const total = QUIZ_QUESTIONS.length;
  const pct   = Math.round((_qScore / total) * 100);

  let icon, title, msg;
  if (pct >= 85) {
    icon  = '🏆';
    title = 'Outstanding!';
    msg   = `You scored ${pct}% — you have an excellent understanding of personal finance. Keep growing your knowledge!`;
  } else if (pct >= 65) {
    icon  = '🎉';
    title = 'Great Job!';
    msg   = `You scored ${pct}% — solid financial literacy! Review the modules where you struggled to fill in the gaps.`;
  } else if (pct >= 40) {
    icon  = '📚';
    title = 'Good Start!';
    msg   = `You scored ${pct}% — you have the basics down. Spend some time in the Learn section to deepen your knowledge.`;
  } else {
    icon  = '💡';
    title = 'Keep Learning!';
    msg   = `You scored ${pct}% — everyone starts somewhere! Head to the Learn section and work through the modules.`;
  }

  $('quiz-results-icon').textContent  = icon;
  $('quiz-results-title').textContent = title;
  $('quiz-score-display').textContent = `${_qScore} / ${total}`;
  $('quiz-results-msg').textContent   = msg;
}

/* ============================================================
   INIT — wire everything up on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  initLearnPage();
  initQuizPage();

  // Modal close handlers
  const closeBtn = $('modal-close-btn');
  const overlay  = $('lesson-modal');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay)  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Tools: run initial calculations
  if ($('income'))        calcBudget();
  if ($('ci-principal'))  { calcCompound(); }
  if ($('sg-goal'))       calcSavings();

  // Tools tabs
  if ($('tab-budget')) switchTab('budget');
});
