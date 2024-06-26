## SETUP
```
yarn install
```
### DEVELOPMENT
```
yarn serve
```

### BUILD
```
yarn build
```

# 指南
## 维护新闻
### 文件位置：public/static/news.js
### 数据结构：
```
{
  toplist: {
    zh: [{
      cate: "长岭新闻",
      title: "长岭资本获评...的",
      link: "https://mp.weixin.qq.com/s/jyScci_EDY0QCb_qHwXsSA",
      abstract: "2018年12月18日....",
      date: "August 20, 2018"
    }],
    en: [{
        ...
    }]
  },
  list: [{
    cate: "PORTFOLIO",
    title: "零氪科技受邀...",
    link: "https://mp.weixin.qq.com/s/gTWWF_QZ5BC5Onlmojz6RA",
    source: "Linkdoc视界",
    abstract: "...",
    date: "June 29, 2019"
  }]
}
```
### toplist中数据对应首页显示的3条新闻，中英文分开维护，字段对应关系如下：
> cate -> 分类

> title -> 新闻标题

> link -> 新闻链接

> abstract -> 新闻摘要

> date -> 发布日期

### list中数据对应新闻列表，不区分中英文，字段对应关系如下：
> cate -> 分类; 只能填写 “LONG HILL CAPITAL、PORTFOLIO、ENGLISH ONLY” 三者之一

> title -> 新闻标题

> link -> 新闻链接

> source -> 新闻来源

> abstract -> 新闻摘要

> date -> 发布日期

## 其他文字类维护
### 文件位置
> 中文：src/locales/zh.json

> 英文：src/locales/en.json
### 数据结构：
```
{
  "header": {
    "navs": { /* 这里是导航栏菜单文字 */
      "thesis": "THESIS",
      "about": "ABOUT",
      "team": "PEOPLE",
      "portfolio": "PORTFOLIO",
      "news": "NEWS",
      "contact": "CONTACT"
    },
    "targetlang": "中文",
    "slides": [ // 这里是幻灯对应的图片、标题、一句话介绍 
      {
        "image": "./static/image/head/hd-1.jpg",
        "title": "LONG HILL CAPITAL",
        "slogan": "Health & Happiness for The 100-Year Life"
      },
      {
        "image": "./static/image/head/hd-2.jpg",
        "title": "",
        "slogan": ""
      },
      {
        "image": "./static/image/head/hd-3.jpg",
        "title": "",
        "slogan": ""
      }
    ]
  },
  "focus": { // 这里是投资主题部分 
    "title": "THESIS FOCUS",
    "subtitle": "Delivering Deep Expertise in Five Thesis Areas",
    "paragraphs": [
      "By 2050, nearly 50% of Chinese will be over the age of 50, according to a recent report from the United Nations on World Population Prospects. The call to action to build a massive social and economic infrastructure to cope with China’s aging tsunami has never been greater.",
      "At Long Hill Capital, we seek to make longevity a gift of life for every Chinese by investing in technology enabled transformations of healthcare and consumer sectors. Together the Long Hill Capital team have decades of experience helping to build industry leaders in our five core thesis areas of focus."
    ],
    "cates": [
      "HEALTHCARE SERVICES",
      "HEALTHCARE TECHNOLOGY",
      "ENABLING INFRASTRUCTURE FOR HEALTH",
      "CONSUMER HEALTH",
      "AGING CONSUMER"
    ]
  },
  "about": {
    "title": "ABOUT LONG HILL CAPITAL",
    "paragraphs": [
      "Long Hill Capital was founded in 2016 by the team who previously led China investing practice for global investment firm New Enterprise Associates (NEA) for over a decade as a next-generation thesis-driven venture capital firm based in China. With offices in Shanghai and Beijing, we today manage over $450M in capital from premiere global investors including endowments, foundations, pension funds and financial institutions."
    ],
    "cates": [
      {
        "do": "Manage",
        "howmany": "$450M+",
        "what": "Capital"
      },
      {
        "do": "Invested",
        "howmany": "40+",
        "what": "Startups"
      },
      {
        "do": "Annually Serve",
        "howmany": "8M+",
        "what": "Patients/Consumers"
      },{
        "do": "Annually Serve",
        "howmany": "20,000+",
        "what": "Business Customers"
      }
    ]
  },
  "team": { // 这里是团队部分 
    "title": "PEOPLE",
    "group": [
      {
        "name": "TEAM MEMBER",
        "abstract": "Based in Shanghai and Beijing, our investment professionals, with 50+ years of combined venture capital experience are committed to building lasting value for growing companies in dynamic industries.",
        "members": [
          {
            "name": "Fiona Cai",
            "title": "Vice President",
            "photo": "./static/image/photo/1-1.png",
            "linkedin": "https://www.linkedin.com/in/fiona-cai-28384a87/",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Fiona joined Long Hill Capital as Vice President in 2019.",
              "Prior to joining Long Hill, Fiona has served as a Vice President at KaiTai Capital healthcare team, mainly focused on medical services, consumer health and digital health investing. She has led investments in Sanbo Brain Hospital,Zhongke MEC, Scitop Bio-Tech,Yulong medicine and etc.",
              "Fiona received a master's degree in business management from Zhejiang University."
            ]
          },
          {
            "name": "Dene Deng",
            "title": "Senior Associate",
            "photo": "./static/image/photo/1-2.png",
            "linkedin": "https://www.linkedin.com/in/%E6%99%BA%E5%8D%87-%E9%82%93-a51281107/",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Dene joined Long Hill Capital as Senior Associate in 2018.",
              "Dene came to Long Hill from New Hope Group, where he was a healthcare focused investment manager. Prior to New Hope, Dene was CEO of a large private hospital in Chengdu focused on chronic kidney disease. He was previously a sales and marketing manager at Mindray Medical and Xi'an Janssen Pharmaceutical.",
              "Dene holds a bachelor's degree from Chengdu Medical College."
            ]
          },
          {
            "name": "Chris Hong",
            "title": "Vice President",
            "photo": "./static/image/photo/1-3.png",
            "linkedin": "https://www.linkedin.com/in/yunxiang-hong-83576847",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Chris is Vice President of Long Hill Capital. He joined the firm in 2017 to focus on healthcare investment.",
              "Prior to joining Long Hill, Chris was a Senior Associate in Ping An Ventures, where he focused on the early and growth stage investment in medical devices, medical services and digital health area. Prior to Ping An Ventures, Chris worked at Fosun Health Holdings and specializes in healthcare investment, including medical services, digital health and health related consumer goods. ​​​ Prior to that, Chris undertook tasks related to fund raising and investor relation at Fosun Capital.​​​",
              "Chris received a bachelor's degree in Business Administration from Xia Men University."
            ]
          },
          {
            "name": "Xiaodong Jiang",
            "title": "Managing Partner",
            "photo": "./static/image/photo/1-4.png",
            "linkedin": "https://cn.linkedin.com/in/xiaodong-jiang-444ab",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Xiaodong Jiang is the Managing Partner of Long Hill Capital. He focuses on healthcare and consumer services investments, and currently serves as a director of GST Clinics, LinkDoc Technology, More Health, Simply Psychology on behalf of Long Hill Capital.",
              "Xiaodong began his investing career at New Enterprise Associates (NEA), a leading global venture capital firm he joined in 2005 as its first full time Chinese employee and opened its China office. As Partner and Managing Director, Xiaodong led the on-the-ground China investing practice for NEA over the last 11 years. To date, NEA China has achieved over $500 million in realized investment returns with notable exits such as Spreadtrum, LineKong, LianLian Pay, WeDoctor, CITIC Pharmaceutical, Hygeia Medical Services and New Journey Hospital Group.",
              "Xiaodong received a Master's degree from the University of Illinois Urbana-Champaign and a bachelor's degree from Nanjing University in China. He was a doctoral candidate in computer science at University of California, Berkeley as a United Nations Fellow and a Mayfield Fellow."
            ]
          },
          {
            "name": "Doris Liu",
            "title": "Finance Associate",
            "photo": "./static/image/photo/2-1.png",
            "linkedin": "https://www.linkedin.com/in/doris-liu-42615568/",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Doris joined Long Hill Capital in 2018 as Finance Associate.",
              "Prior to joining Long Hill Capital, Doris was a Senior Associate at PricewaterhouseCoopers, specializing in audit and assurance services for private equity.",
              "Doris holds a master’s degree in Accounting from Tongji University. She is also a member of the Chinese Institute of Certified Public Accounts."
            ]
          },
          {
            "name": "Song Mei",
            "title": "Vice President",
            "photo": "./static/image/photo/2-2.png",
            "linkedin": "https://cn.linkedin.com/in/songmei",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Song joined Long Hill Capital in 2016 as a Vice President to focus on consumer service investment.",
              "Song had rich investment and industry experiences in consumer services. Prior to joining Long Hill, Song spent 5 years on Matrix Partners China’s TMT team, where he focused on mobile internet, O2O, marketplace, and consumption upgrade and was part of the team that led investments in Ele.me, thebeastshop.com, 9now.cn, i200.cn, etc.",
              "Prior to Matrix, Song contributed his expertise in product management and market development to 99bill.com and the9.com. Before that, Song was a senior product marketing manager in HUAWEI Technologies, where he gained rich business experience in overseas markets.",
              "Song received a bachelor's degree in Automation from Shanghai Jiao Tong University."
            ]
          },
          {
            "name": "Jack Shen",
            "title": "Vice President",
            "photo": "./static/image/photo/2-3.png",
            "linkedin": "https://cn.linkedin.com/in/jackshenye",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Jack is Vice President of Long Hill Capital. He joined the firm in 2017 to focus on consumer investment.",
              "Prior to joining Long Hill, Jack was an Investment Manager at Vision Knight Capital focusing on growth stage investments in consumption upgrade, B2B, and financial technology sectors. Before joining VKC, Jack was involved in project management and internal strategy at American Express Enterprise Growth Group. Previously, Jack was an analyst at UBS Investment Bank San Francisco office, where he primarily focused on financial technology and asset management sectors and participated in equity, debt offering and LBO deals.",
              "Jack holds a bachelor's degree from UC Berkeley, and a master's degree from MIT."
            ]
          },
          {
            "name": "Sabrina Sun",
            "title": "Executive Assistant",
            "photo": "./static/image/photo/2-4.png"
          },
          {
            "name": "Angela Wang",
            "title": "Executive Assistant",
            "photo": "./static/image/photo/3-1.png"
          },
          {
            "name": "Pinky Wang",
            "title": "Office Manager",
            "photo": "./static/image/photo/3-2.png"
          },
          {
            "name": "Teddy Wang",
            "title": "Chief Financial Officer",
            "photo": "./static/image/photo/3-3.png",
            "linkedin": "https://cn.linkedin.com/in/%E6%8C%AF%E5%BA%AD-%E7%8E%8B-33245596/en",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Teddy is Chief Financial Officer of Long Hill Capital. He joined the firm in 2016 and is responsible for all finance and back office operations.",
              "Prior to joining Long Hill Capital, Teddy worked with Morningside Venture Capital as Finance Manager for over 7 years. He started his professional career at PricewaterhouseCoopers in 2005, where he was a Senior Associate specializing in audit and assurance services.",
              "Teddy earned his bachelor’s degree in Computer Science and Technology from Shanghai Jiaotong University. He is a member of the Chinese Institute of Certified Public Accounts and passed CFA level 2 designation exam."
            ]
          },
          {
            "name": "Carrie Xiang",
            "title": "Vice President",
            "photo": "./static/image/photo/3-4.png",
            "linkedin": "https://www.linkedin.com/in/xiangxuecarrie",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Carrie joined Long Hill Capital as Vice President in 2018.",
              "Prior to joining Long Hill, Carrie was deputy general manager of GloriaJD, a joint venture between JD.com and Gloria Pharma where she built and led multiple functions of the company including BD, R&D, marketing and strategy. Also as the head of business development for Gloria Pharma, she has successfully completed a number of licensing and investment deals. Carrie has worked in a number of multinational pharma companies including J&J, Bayer and Novo Nordisk, where she took roles in various core functions including business development, strategy, marketing and government affairs.",
              "Carrie holds a bachelor degree in Biochemistry from University College London (UCL) and also attended the undergraduate programs at Cambridge University."
            ]
          },
          {
            "name": "Frank Xie",
            "title": "Senior Associate",
            "photo": "./static/image/photo/4-1.png",
            "linkedin": "https://www.linkedin.com/in/xuehao-xie-7ba59958/",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Frank joined Long Hill Capital as Senior Associate in 2018.",
              "Prior to joining Long Hill, Frank was a Senior Associate at VStar Capital focusing on growth stage investments in healthcare sector. Before joining VStar, Frank was an analyst at Macquarie Capital (Hong Kong) , where he participated in equity and debt offerings.",
              "Frank holds a bachelor's degree from University of Michigan, Ann Arbor."
            ]
          },
          {
            "name": "Lehui Zhang",
            "title": "Operating Partner",
            "photo": "./static/image/photo/4-2.png",
            "linkedin": "https://www.linkedin.com/company/long-hill-capital/",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Lehui Zhang joined Long Hill as Operating Partner in 2018.",
              "Lehui came to Long Hill from Sinopharm Healthcare Corporation, the healthcare provider platform of China's largest pharmaceutical company, where he was a Deputy General Manager. Prior to Sinopharm, Lehui was Head of Clinical Operations at two of Beijing's largest hospital systems for nearly a decade.",
              "Lehui is head of payer solution research department of National DRG Quality Control Center and serves an advisor at the Hospital Management Institute of National Health Commission. A practicing orthopedic doctor, Lehui received his M.D. from Capital Medical University and bachelor's degree in Law from China University of Political Science and Law."
            ]
          },
          {
            "name": "William Zhang",
            "title": "Senior Associate",
            "photo": "./static/image/photo/4-3.png",
            "linkedin": "https://www.linkedin.com/in/william-zhang-33896437/",
            "email": "bp@lhcap.cn",
            "paragraphs": [
              "Wiiliam Zhang joined Long Hill Capital as Senior Associate in 2019.",
              "Prior to joining Long Hill, William served on the healthcare team of Volcanics Venture,  where he focused on early medtech investment opportunities. Before joining Volcanics, he was involved in overseas buy-out projects at Ch-Gemstone Capital. He was previously responsible for interventional cardiology and surgical products of Lepu Medical in the Middle East and the States.",
              "William has a PhD in Materials Science and Engineering from Tsinghua University."
            ]
          }
        ]
      },
      {
        "name": "STRATEGIC ADVISORS",
        "abstract": "Our partnership with NEA, one of the largest and most successful venture capital firms in the world, provides us with strategic resources and global reach.",
        "members": [
          {
            "name": "Scott Sandell",
            "photo": "./static/image/photo/5-1.png",
            "outlink": "http://www.nea.com/team/scott-sandell"
          },
          {
            "name": "Carmen Chang",
            "photo": "./static/image/photo/5-2.png",
            "outlink": "http://www.nea.com/team/carmen-chang"
          }
        ]
      }
    ]
  },
  "portfolio": { // 这里是投资组合 
    "title": "PORTFOLIO COMPANIES",
    "companyTypes": [
      "ALL COMPANIES",
      "HEALTHCARE SERVICES",
      "HEALTHCARE TECHNOLOGY",
      "ENABLING INFRASTRUCTURE FOR HEALTH",
      "CONSUMER HEALTH",
      "AGING CONSUMER"
    ],
    "companies": [
      {
        "picture": "./static/image/company-logo/01.png",
        "type": "HEALTHCARE SERVICES",
        "text": "GST Clinics: No.1 TCM clinic operator"
      },
      {
        "picture": "./static/image/company-logo/02.png",
        "type": "HEALTHCARE SERVICES",
        "text": "Hygeia Medical: Leading private hospital group"
      },
      {
        "picture": "./static/image/company-logo/03.png",
        "type": "HEALTHCARE SERVICES",
        "text": "Orient Speech Therapy: Speech therapy and autism rehab center"
      },
      {
        "picture": "./static/image/company-logo/04.png",
        "type": "HEALTHCARE TECHNOLOGY",
        "text": "LinkDoc: Leading medical big data company"
      },
      {
        "picture": "./static/image/company-logo/05.png",
        "type": "HEALTHCARE TECHNOLOGY",
        "text": "More Health: Cross border telemedicine and physician collaboration platform"
      },
      {
        "picture": "./static/image/company-logo/06.png",
        "type": "HEALTHCARE TECHNOLOGY",
        "text": "Simple Psychology: Online mental health service platform"
      },
      {
        "picture": "./static/image/company-logo/07.png",
        "type": "ENABLING INFRASTRUCTURE FOR HEALTH",
        "text": "Aiyaku: Largest dental e-commerce platform"
      },
      {
        "picture": "./static/image/company-logo/09.png",
        "type": "ENABLING INFRASTRUCTURE FOR HEALTH",
        "text": "Lab Direct: Leading laboratory & scientific supply platform"
      },
      {
        "picture": "./static/image/company-logo/16.png",
        "type": "ENABLING INFRASTRUCTURE FOR HEALTH",
        "text": "VCbeat: Top media platform focused on healthcare"
      },
      {
        "picture": "./static/image/company-logo/10.png",
        "type": "CONSUMER HEALTH",
        "text": "Rainbow Pediatrics: Leading online marketplace for pediatric care"
      },
      {
        "picture": "./static/image/company-logo/12.png",
        "type": "CONSUMER HEALTH",
        "text": "Neck Defender: Physical therapy clinic operator"
      },
      {
        "picture": "./static/image/company-logo/11.png",
        "type": "CONSUMER HEALTH",
        "text": "OFashion: Managed marketplace for fashion e-commerce"
      },
      {
        "picture": "./static/image/company-logo/15.png",
        "type": "AGING CONSUMER",
        "text": "AgeClub: New media focused on aging consumer"
      }
    ]
  },
  "news": {
    "title": "NEWS & UPDATES",
    "cates": [
      {
        "type": "ALL"
      },
      {
        "type": "LONG HILL CAPITAL"
      },
      {
        "type": "PORTFOLIO"
      },
      {
        "type": "ENGLISH ONLY"
      }
    ],
    "moretext": "MORE NEWS"
  },
  "footer": { // 这里是页尾
    "copyright": "© 2019 Long Hill Capital. All Rights Reserved.",
    "shanghai": {
      "name": "SHANGHAI OFFICE",
      "addr": ["UNIT 2202, PLAZA 66, TOWER 1", "1266 WEST NANJING ROAD 200040"]
    },
    "beijing": {
      "name": "BEIJING OFFICE",
      "addr": ["UNIT 1802, CHINA WORLD OFFICE 2", "1 JIANGUOMENWAI AVENUE 100004"]
    },
    "contact": [
      {
        "className": "bussiness",
        "name": "BUSINESS PLAN ",
        "mail": "bp@lhcap.cn"
      },
      {
        "className": "investor",
        "name": "INVESTOR RELATIONS",
        "mail": "ir@lhcap.cn"
      },
      {
        "className": "media",
        "name": "MEDIA & INFO",
        "mail": "info@lhcap.cn"
      },
      {
        "className": "career",
        "name": "CAREER OPPORTUNITY",
        "mail": "hr@lhcap.cn"
      }
    ]
  }
}
```

