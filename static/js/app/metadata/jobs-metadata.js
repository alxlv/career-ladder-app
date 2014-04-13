define({
  jobs: [
    {
      id: 1,
      position: ['Student'],
      employment_type: 'education',
      working_type: 'university',
      dateFrom: '09.1999',
      dateTo: '02.2005',
      location: 'Pskov',
      company: 'Pskov Polistate University',
      website: 'http://pskgu.ru/',
      projects: [
        {
          title: 'Student', description: 'Bachelor\'s degree: system engineer. Diploma: \'The development of hardware-software web based complex that controls and manages the uninterruptible power supply\'.',
          responsibilities: [],
          tags: [
            { languages: [], stack: [] }
          ],
          screenshots: [],
          references: []
        }
      ]
    }, {
      id: 2,
      position: ['Cofounder', 'System administrator'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '09.2003',
      dateTo: '02.2005',
      location: 'Pskov',
      company: 'District 5 network',
      website: '',
      projects: [
        {
          title: 'District 5 network', description: 'I was one of cofounder of local network that operates than more 200+ users.',
          responsibilities: [
            'Performed day-to-day administration functions, backup and restoration, file server maintenance',
            'Implemented virus protection',
            'Analyzed the hardware and software requirements',
            'Managed user accounts, groups and controlling access rights',
            'Provided connectivity (LAN, Internet) troubleshooting and support for approximately 200 users'
          ],
          tags: [
            { languages: [], stack: ['Linux', 'FreeBSD'] }
          ],
          screenshots: [],
          references: []
        }
      ]
    }, {
      id: 3,
      position: ['C++ developer', 'Embedding developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '05.2004',
      dateTo: '05.2005',
      location: 'Pskov',
      company: 'Ats-Convers',
      website: 'http://www.atsconvers.ru/',
      projects: [
        {
          title: 'WebTel', description: 'Software for remote monitoring and control of uninterruptible power supply and WEB-based invertors.',
          responsibilities: [
            'Problem definition and development of the application structure and algorithms',
            'Code writing in Borland C++ 3.1, Watcom C/C++ 11, size optimization of program parts in assembler, development of the interface part on basis of WEB technologies (HTML/ JavaScript)',
            'Debugging, maintenance',
            'Technical writing'
          ],
          tags: [
            { languages: ['C++', 'C', 'Assembler'], stack: ['Borland C++ 3.1', 'Watcom 11', 'HTML', 'Javascript'] }
          ],
          screenshots: [],
          references: []
      },
      {
        title: 'WebTel TFTP updater', description: 'Software for loading updates of a WebTel program via a TFTP application-level protocol.',
        responsibilities: [
         'Development of the application structure and algorithms',
         'Code writing in Visual Studio 6.0 with Visual C++ 6.0',
         'Debugging, maintenance',
         'Technical writing (compressed HTML files in CHM format)'
        ],
        tags: [
          { languages: ['C++'], stack: ['MVC', 'Visual C++ 6.0', 'Visual Studio 98', 'TFTP', 'TCP/IP'] }
        ],
        screenshots: [],
        references: []
      }
    ]
    }, {
      id: 4,
      position: ['Java developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '06.2005',
      dateTo: '10.2005',
      location: 'Saint-Petersburg',
      company: 'Stek',
      website: '',
      projects: [
        { title: 'Java SIM Menu', description: 'The applet for mobile that provides interactive access to services like forecasts, currency exchanges and entertainments with user-friendly navigation.',
          responsibilities: [
            'Development of the applet structure and algorithms',
            'Code writing in Intellij Idea 6.0 with Java',
            'Debugging'
          ],
          tags: [
            { languages: ['Java'], stack: ['SIM card', 'Intellij Idea', 'JVM'] }
          ],
          screenshots: [],
          references: []
        }
      ]
    }, {
      id: 5,
      position: ['C#.NET developer', 'C++ developer', 'Embedding developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '11.2005',
      dateTo: '11.2006',
      location: 'Saint-Petersburg',
      company: 'ATIS',
      website: 'http://as-atis.ru/',
      projects: [
        {
          title: 'Kzp', description: 'Software for control and monitoring of railway equipment with the help of the serial port interface.',
          responsibilities: [
            'Development of the application structure and algorithms',
            'Code writing in Visual Studio .Net 2003/2005 with C++/C#',
            'Refactoring code using GoF patterns',
            'Debugging, maintenance',
            'Deploying application on railway stations around Eastern Russia (Krasnoyarsk, Novosibirsk)',
            'Writing the User\'s Guide and technical documentation (compressed HTML files in CHM format)'],
          tags: [
            { languages: ['C#', 'C++'], stack: ['.NET 2.0', 'GoF', 'Visual Studio .Net 2003', 'WinForms', 'ADO .NET', 'Reflection', 'Generics'] }
          ],
          screenshots: [
            { title: 'Main view', width: '110', height: '70', type: 'pic', thumbnail: 'media/screenshots/atis/mainview.jpg'},
            { title: 'Event log player', width: '70', height: '90', type: 'pic', thumbnail: 'media/screenshots/atis/event_log_dlg.jpg'},
            { title: 'Preferences', width: '90', height: '70', type: 'pic', thumbnail: 'media/screenshots/atis/path_bizp.jpg'},
            { title: 'Paths capacity', width: '60', height: '40', type: 'pic', thumbnail: 'media/screenshots/atis/wnd_freedom_rtl.jpg'}
          ],
          references: []
        },
        {
          title: 'SmartMon', description: 'Software for diagnosis, measurement, display and registration of signals using Bluetooth-connection.',
          responsibilities: [
            'Development of the application structure and algorithms',
            'Code writing in Visual Studio .Net 2005 with C# (Smartphone 2003 SDK)',
            'Measurement set (8-bit microcontroller ATMega 8515)',
            'Transmission set (Bluetooth master adapter, BlueGiga WTOR). Programming the serial profile via AT commands',
            'Display set (Smart phone/PDA/PC with support of Bluetooth).'
          ],
          tags: [
            { languages: ['C#', 'C'], stack: ['.NET CF 2.0', 'Smartphone 2003 SDK', 'Visual Studio .Net 2005', '8-bit microcontroller ATMega 8515', 'Bluetooth', 'BlueGiga WTOR', 'Smartphone', 'PDC', 'PC', 'AT commands'] }
          ],
          screenshots: [],
          references: []
        }
      ]
    }, {
      id: 6,
      position: ['C#.NET developer', 'Embedding developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '01.2007',
      dateTo: '03.2008',
      location: 'Saint-Petersburg',
      company: 'Kelman Ltd',
      website: 'http://www.kelman.co.uk/',
      projects: [
        {
          title: 'SMM', description: 'Application software for diagnostic and management the relay protection system.',
          responsibilities: [
            'Development GUI module for digital filter',
            'Code writing in Visual Studio .Net 2005 with C# (.NET 2.0)',
            'Debugging'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 2.0', 'Visual Studio .Net 2005', 'WinForms'] }
          ],
          screenshots: [],
          references: []
        },
        {
          title: 'TransConnect', description: 'Software for diagnostic, measurement of gas analysis hostboard through USB/TCP/Serial port interfaces.',
          responsibilities: [
            'Development GUI and communication modules',
            'Code writing in Visual Studio .Net 2005 with C# (.NET 1.1/2.0)',
            'Subversion Wiki as version control system bug tacking',
            'Refactoring code using GoF patterns',
            'Debugging, maintenance'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 1.1', '.NET 2.0', 'GoF', 'Visual Studio .Net 2005', 'SVN', 'Wiki', 'WinForms', 'NUnit', 'ADO.NET', 'Reflection', 'Generics'] }
          ],
          screenshots: [],
          references: []
        }
      ]
    }, {
      id: 7,
      position: ['Senior C#.NET developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '04.2008',
      dateTo: '09.2009',
      location: 'Saint-Petersburg',
      company: 'Paladyne Systems',
      website: 'http://www.paladynesys.com/',
      projects: [
        {
          title: 'Analytics Master', description: 'Software for optimizing hedge fund activities (back-office).',
          responsibilities: [
            'Development GUI and business logic (MSSQL 2005)',
            'Code writing in Visual Studio .Net 2008 TFS with C# (.NET 2.0/3.5)',
            'Refactoring, GoF design patterns',
            'Scrum'
          ],
          tags: [
            { languages: ['C#', 'SQL'], stack: ['.NET 2.0', 'Infragistics WinForms', 'GoF', 'Scrum', '.NET 3.5', 'MSSQL 2005', 'Visual Studio .Net 2008', 'TFS', 'WinForms', 'NUnit', 'Web service', 'Workflow foundation', 'ADO .NET', 'XML', 'Serialization', 'Reflection', 'Generics', 'Remoting'] }
          ],
          screenshots: [
            { title: 'Report Grid', width: '120', height: '80', type: 'pic', thumbnail: 'media/screenshots/paladyne/grid.jpg' },
            { title: 'Formula workshop', width: '100', height: '80', type: 'pic', thumbnail:'media/screenshots/paladyne/formula_workshop.jpg'}
          ],
          references: [
            { title: 'Artyom Pavlinov', position: 'Project manager', contact: 'skype:apavlinov' }
          ]
        }
      ]
    }, {
      id: 8,
      position: ['Senior C#.NET developer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '08.2010',
      dateTo: '05.2011',
      location: 'Saint-Petersburg',
      company: 'Blueprint (Sofea SPB)',
      website: 'http://www.blueprintsys.com/',
      projects: [
        {
          title: 'Raptor/Requirements center', description: 'It is a complete requirements solution for definition and collaboration. Enables authors to define requirements using rich text, UI mockups, use cases, business process, data, and roles. Uses rich simulation to visually communicate requirements to stakeholders in distributed or local organizations.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 20 members (Canada/Russia)',
            'Development of Presentation Layer (Graphic Core team)',
            'Code writing in Visual Studio .Net 2010 TFS with C# (.NET 4.0), Silverlight',
            'Refactoring, GoF design patterns'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 4.0', 'GoF', 'Telerik Silverlight', 'Scrum', 'Silverlight', 'Visual Studio .Net 2008', 'Visual Studio .Net 2010', 'WCF RIA Services', 'NUnit', 'Entity framework', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: [
            { title: 'Generic diagram editor', width: '110', height: '65', type: 'pic', thumbnail: 'media/screenshots/blueprint/genericdiagram.png' },
            { title: 'Properties grid', width: '110', height: '65', type: 'pic', thumbnail:'media/screenshots/blueprint/reviewtrackprogress.png'},
            { title: 'Storyboard editor', width: '110', height: '65',type: 'pic', thumbnail:'media/screenshots/blueprint/storyboard.png' }
          ],
          references: [
            { title: 'Salah Sharieh', position: 'Team leader', contact: 'skype:salah_sharieh' }
          ]
        }
      ]
    }, {
      id: 9,
      position: ['Cofounder', 'Technical leader'],
      employment_type: 'startup',
      working_type: 'remote',
      dateFrom: '10.2009',
      dateTo: '11.2011',
      location: 'Saint-Petersburg',
      company: 'DSB',
      website: 'http://www.simactivator.ru/',
      projects: [
        {
          title: 'SIMActivator', description: 'Software for automation of business processes for regional telecommunication companies.',
          responsibilities: [
            'Managing team as a technical leader within 2 developers working by SCRUM methology',
            'Development GUI and business logic (stored procedures, MySQL 5.x)',
            'Code writing in Visual Studio .NET 2008 with C# (.NET 3.5)',
            'Code writing in Eclipse with PHP 5.x',
            'Refactoring, GoF design patterns'
          ],
          tags: [
            { languages: ['C#', 'SQL', 'Javascript', 'PHP', 'HTML'], stack: ['.NET 3.5', 'Infragistics WinForms', 'MySQL 5', 'Scrum', 'AJAX', 'jQuery', 'WPF', 'WinForms', 'Windows services', 'Visual Studio .Net 2008', 'Visual Studio .Net 2010', 'NUnit', 'Linq', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: [
            { title: 'Server - Salepoints', width: '100', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/admin_salepoints_create.PNG'},
            { title: 'Server - Users', width: '100', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/admin_users.PNG'},
            { title: 'Server - Diagnostics', width: '100', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/admin_diagnostics.PNG'},
            { title: 'Authentication', width: '40', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_auth_window.PNG'},
            { title: 'Beeline preferences', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_beeline_preferences.PNG'},
            { title: 'Beeline resident', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_beeline_resident.PNG' },
            { title: 'Megafon preferences', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_megafon_preferences.PNG' },
            { title: 'Megafon resident',width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_megafon_resident.PNG' },
            { title: 'MTC preferences', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_mts_preferences.PNG' },
            { title: 'MTC resident', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_mts_resident.PNG' },
            { title: 'Tele2 preferences', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_tele2_preferences.PNG' },
            { title: 'Tele2 resident', width: '70', height: '65', type: 'pic', thumbnail:'media/screenshots/dsb/client_tele2_resident.PNG' }
          ],
          references: []
        }
      ]
    }, {
      id: 10,
      position: ['Senior C#.NET developer', 'Support engineer'],
      employment_type: 'regular full-time',
      working_type: 'office',
      dateFrom: '02.2011',
      dateTo: '03.2012',
      location: 'Saint-Petersburg',
      company: 'VinTelligent',
      website: 'http://www.vintelligent.com/',
      projects: [
        {
          title: 'M21', description: 'The terminal operation system (part of Ports America software products) that operate with container terminals.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 10 members (USA/Russia)',
            'Developing GUI for vessel application',
            'Code writing in Visual Studio .NET 2010 with C# (.NET 4.0)',
            'Code writing in Visual Studio 6.0 with Visual Basic 6.0',
            'Investigating performance issues using dotTrace, VBWatch tools, Performance Monitor',
            'Resolving customer complaints on real-time basis, systems monitoring',
            'Refactoring, GoF design patterns',
            'Create unit tests using NUnit integrated into Visual Studio 2010'
          ],
          tags: [
            { languages: ['Visual Basic 6.0', 'C#'], stack: ['.NET 4.0', 'DevExpress WinForms', 'GoF', 'WinForms', 'Scrum', 'SVN', 'Cruise control', 'Visual Studio .Net 2010', 'NUnit', 'Linq', 'dotTrace'] }
          ],
          screenshots: [
            { title: 'Operation management', width: '120', height: '80', type: 'pic', thumbnail: 'media/screenshots/vintelligent/operation_management.png'},
            { title: 'Pedestal', width: '80', height: '100', type: 'pic', thumbnail: 'media/screenshots/vintelligent/pedestal.png'},
            { title: 'General arrangement', width: '120', height: '80', type: 'pic', thumbnail: 'media/screenshots/vintelligent/general_arr.png'},
            { title: 'Chassis damage', width: '120', height: '80', type: 'pic', thumbnail: 'media/screenshots/vintelligent/chassis_damage.png'},
            { title: 'Job control', width: '120', height: '80', type: 'pic', thumbnail: 'media/screenshots/vintelligent/job_control.png'}
          ],
          references: [
            { title: 'Jason McBurney', position: 'Team leader', contact: 'mailto:Jason.mcburney@gmail.com' }
          ]
        }
      ]
    }, {
      id: 11,
      position: ['Senior C#.NET developer', 'Installation developer'],
      employment_type: 'regular part-time',
      working_type: 'remote',
      dateFrom: '01.2011',
      dateTo: '04.2012',
      location: 'Moscow',
      company: 'Perfect Vision Soft',
      website: 'http://perfectvisionsoft.com',
      projects: [
        {
          title: 'Perfect Vision Gallery', description: 'The tool helps non professionals to create video presentations easy and fast.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 7 members all around Russia',
            'Create build box machine using VisualBuild Pro',
            'Developing of msi installation package using WiX Toolset 3.5',
            'Implementing new features and fix bugs in desktop client application (C#, .NET 4.0, WPF)',
            'Create unit tests using NUnit integrated into Visual Studio 2010'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 4.0', 'WPF', 'Scrum', 'TFS', 'WiX Toolset 3.5', 'Visual Studio .Net 2010', 'Visual Build Pro', 'NUnit', 'Linq', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: [
            { title: 'UI modules', width: '220', height: '140', type: 'video', thumbnail: 'http://www.youtube.com/embed/7nrZwEtJ7mQ'},
            { title: 'Main window', width: '120', height: '80', type: 'pic', thumbnail: 'media/screenshots/pv/main_wnd.png'},
            { title: 'Module Carousel', width: '110', height: '80', type: 'pic', thumbnail: 'media/screenshots/pv/carousel_mod.png'},
            { title: 'Module Manipulator', width: '110', height: '80', type: 'pic', thumbnail: 'media/screenshots/pv/manipulator_mod.png'}
          ],
          references: [
            { title: 'Igor Vagin', position: 'CEO, Cofounder', contact: 'skype:antaresantares' }
          ]
        }
      ]
    }, {
      id: 12,
      position: ['Senior C#.NET developer', 'Visual Basic.NET developer', 'Support engineer'],
      employment_type: 'regular full-time',
      working_type: 'remote',
      dateFrom: '05.2012',
      dateTo: '11.2013',
      location: 'Saint-Petersburg',
      company: 'Ultima Businessware',
      website: 'http://www.ultimaerp.com/',
      projects: [
        {
          title: 'Ultima ERP', description: 'ERP-system of international standard for the medium and big businesses based on Oracle 11g database.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 20 members all around Russia',
            'Implementing new features and fix bugs in desktop client application (C#, .NET 4.0)',
            'Implementing BL with server-side handlers (Visual Basic .NET)',
            'Analysis, design, programming, testing, implementation and production support of Oracle PL/SQL scripts and stored-procedures',
            'Resolving customer complaints on real-time basis'
          ],
          tags: [
            { languages: ['C#', 'PL/SQL', 'Visual Basic .NET'], stack: ['.NET 4.0', 'Git', 'DevExpress WinForms', 'Oracle 11g', 'Scrum', 'SVN', 'Visual Studio .NET 2010', 'XML', 'Cruise control'] }
          ],
          screenshots: [
            { title: 'Documents list', width: '140', height: '70', type: 'pic', thumbnail: 'media/screenshots/ultima/list.png'},
            { title: 'Payments claim document', width: '120', height: '70', type: 'pic', thumbnail: 'media/screenshots/ultima/payment_claim.png'},
            { title: 'Report', width: '100', height: '80', type: 'pic', thumbnail: 'media/screenshots/ultima/report.png'},
            { title: 'Mobile payments', width: '110', height: '70', type: 'pic', thumbnail: 'media/screenshots/ultima/mobile.png'}
          ],
          references: [
            { title: 'Alexander Zolotov', position: 'Project manager', contact: 'skype:ultima.businessware' }
          ]
        }, {
          title: 'Supplier exchange', description: 'The web application helps company to manage the process of supplying goods.',
          responsibilities: [
            'Working directly with business analyst and customer to specify requirements',
            'Implementing new features in web application (PHP, Javascript, HTML)',
            'Implementing new features in server side web service (C#, .NET 4.0)',
            'Analysis, design, programming, testing, implementation and production support of Oracle PL/SQL scripts and stored-procedures'
          ],
          tags: [
            { languages: ['PHP', 'C#', 'Javascript', 'HTML'], stack: ['.NET 4.0', 'YII 2.0', 'Git', 'less', 'jQuery', 'Scrum', 'SVN', 'WebService', 'PhpStorm', 'Visual Studio .Net 2010', 'XML'] }
          ],
          screenshots: [
          ],
          references: [
            { title: 'Alexander Zolotov', position: 'Project manager', contact: 'skype:ultima.businessware' }
          ]
        }
      ]
    }, {
      id: 13,
      position: ['Javascript frontend developer'],
      employment_type: 'regular part-time',
      working_type: 'remote',
      dateFrom: '01.2014',
      dateTo: '03.2014',
      location: 'Saint-Petersburg',
      company: 'Akzia.com',
      website: 'http://akzia.com/',
      projects: [
        {
          title: 'Akzia payments', description: 'The single page application provides payments support for initial 108 merchants through Elecsnet API (http://www.elecsnet.ru/).',
          responsibilities: [
            'Implementing frontend part with Javascript (AngularJS)',
            'Profiling application to find and fix leaks and performance bottlenecks',
            'Working by SCRUM methology in the distributed team'
          ],
          tags: [
            { languages: ['Javascript', 'CSS', 'HTML'], stack: ['AngularJS', 'WebStorm', 'Chrome DevTools', 'less', 'Scrum', 'Git'] }
          ],
          screenshots: [
            { title: 'Main window', width: '120', height: '85', type: 'pic', thumbnail: 'media/screenshots/akzia/mainview.png'},
            { title: 'Navigation', width: '120', height: '85', type: 'pic', thumbnail: 'media/screenshots/akzia/navigation.png'},
            { title: 'Payments', width: '120', height: '85', type: 'pic', thumbnail: 'media/screenshots/akzia/payment.png'},
            { title: 'My office', width: '120', height: '85', type: 'pic', thumbnail: 'media/screenshots/akzia/office.png'},
            { title: 'Children', width: '120', height: '85', type: 'pic', thumbnail: 'media/screenshots/akzia/children.png'}
          ],
          references: [
            { title: 'Vasiliy Ruzanov', position: 'Project manager', contact: 'skype:vasiliy.ruzanov' }
          ]
        }
      ]
    }, {
      id: 14,
      position: ['MCAD/MCSD'],
      employment_type: 'certification',
      working_type: 'office',
      dateFrom: '09.2007',
      dateTo: '03.2008',
      location: 'Saint-Petersburg',
      company: 'MCP Transcript sharing tool',
      website: 'https://mcp.microsoft.com/Anonymous/Transcript/Validate',
      projects: [
        {
          title: 'Microsoft Certified Solution Developer / Microsoft Certified Application Developer / Microsoft Certified Professional',
          description: 'Transcript code – 792334, access code - 000F0975',
          responsibilities: [ 'Exam ID 229 (Mar 28, 2008) - Designing and Implementing Databases with Microsoft SQL Server™ 2000 Enterprise Edition',
            'Exam ID 300 (Feb 20, 2008) - Analyzing Requirements and Defining Microsoft .NET Solution Architectures',
            'Exam ID 320 (Jan 28, 2008) - Developing XML Web Services and Server Components with Microsoft Visual C# .NET and the Microsoft .NET Framework',
            'Exam ID 316 (Jan 14, 2008) - Developing and Implementing Windows-based Applications with Microsoft Visual C#™ .NET and Microsoft Visual Studio .NET',
            'Exam ID 315 (Nov 26, 2007) - Developing and Implementing Web Applications with Microsoft Visual C#™ .NET and Microsoft Visual Studio .NET'
          ],
          tags: [
            { languages: ['MCAD', 'MCSD'], stack: [] }
          ],
          screenshots: [],
          references: []
        }
      ]
    },/* {
      id: 15,
      position: ['IELTS'],
      employment_type: 'certification',
      working_type: 'office',
      dateFrom: '08.2009',
      dateTo: '08.2009',
      location: 'Moscow',
      company: 'BKC',
      website: 'http://www.bkc.ru/',
      projects: [
        {
          title: 'IELTS',
          description: 'International standardised test of English language proficiency for non-native English language speakers.',
          tags: [
            { languages: [], stack: [] }
          ],
          screenshots: [],
          references: []
        }
      ]
    },*/ {
      id: 16,
      position: ['MCPD Windows Developer 4'],
      employment_type: 'certification',
      working_type: 'office',
      dateFrom: '11.2012',
      dateTo: '03.2013',
      location: 'Saint-Petersburg',
      company: 'MCP Transcript sharing tool',
      website: 'https://mcp.microsoft.com/Anonymous/Transcript/Validate',
      projects: [
        {
          title: 'Microsoft® Certified Professional Developer / Microsoft® Certified Technology Specialist',
          description: 'Transcript code – 792334, access code - 000F0975',
          responsibilities: [ 'Exam ID 513 (Feb 20, 2013) -	TS: Windows Communication Foundation Development with Microsoft .NET Framework 4',
            'Exam ID 518 (Feb 06, 2013) - Pro: Designing and Developing Windows Applications Using Microsoft .NET Framework 4',
            'Exam ID 516 (Jan 16, 2013) - TS: Accessing Data with Microsoft .NET Framework 4',
            'Exam ID 511 (Dec 26, 2012) - TS: Windows Applications Development with Microsoft .NET Framework 4'
          ],
          tags: [
            { languages: ['MCAD', 'MCSD'], stack: [] }
          ],
          screenshots: [],
          references: []
        }
      ]
    }
  ]
});
