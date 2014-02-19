define({
  jobs: [
    {
      id: 1,
      title: 'Student',
      type: 'education',
      dateFrom: '09.1999',
      dateTo: '02.2005',
      location: 'Pskov',
      company: 'Pskov polistate university. Faculty: Automatisation, networks, IT. System engineer',
      website: 'http://pskgu.ru/',
      projects: []
    }, {
      id: 2,
      title: 'Cofounder/System adminitrator (200+ users)',
      type: 'office',
      dateFrom: '09.2003',
      dateTo: '02.2005',
      location: 'Pskov',
      company: 'District 5 network',
      projects: []
    }, {
      id: 3,
      title: 'C++/Embedding developer',
      type: 'office',
      dateFrom: '05.2004',
      dateTo: '05.2005',
      location: 'Pskov',
      company: 'Ats-Convers',
      website: 'www.atsconvers.ru',
      projects: [
        { title: 'WebTel', description: 'Software for remote monitoring and control of uninterruptible power supply and WEB-based invertors.',
          responsibilities: [
            'Problem definition and development of the application structure and algorithms',
            'code writing in Borland C++ 3.1, Watcom 11, size optimization of program parts in assembler, development of the interface part on basis of WEB technologies (HTML/ JavaScript)',
            'debugging, maintenance',
            'technical writing'
          ],
          tags: [
            { languages: ['C++', 'C', 'Assembler'], stack: ['Borland C++ 3.1', 'Watcom 11', 'HTML', 'Javascript'] }
          ],
          screenshots: []
        },
        { title: 'WebTel TFTP updater', description: 'Software for loading updates of a program via a TFTP application-level protocol.',
          responsibilities: [
            'development of the application structure and algorithms',
            'code writing in MVC 6.0 API',
            'debugging, maintenance',
            'technical writing'
          ],
          tags: [
            { languages: ['C++'], stack: ['MVC 6.0', 'TFTP', 'TCP/IP'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 4,
      title: 'Java developer',
      type: 'office',
      dateFrom: '06.2005',
      dateTo: '10.2005',
      location: 'Saint-Petersburg',
      company: 'Stek',
      projects: [
        { title: 'Java SIM Menu', description: '',
          tags: [
            { languages: ['Java'], stack: [] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 5,
      title: 'C#.NET/C++ developer',
      type: 'office',
      dateFrom: '11.2005',
      dateTo: '11.2006',
      location: 'Saint-Petersburg',
      company: 'ATIS',
      website: 'http://as-atis.ru',
      projects: [
        { title: 'Kzp', description: 'Software for control and monitoring of railway equipment with the help of the serial port interface.',
          responsibilities: [
            'development of the application structure and algorithms',
            'code writing in Microsoft Visual Studio .Net 2003',
            'refactoring code using GoF patterns',
            'writing the User\'s Guide and technical documentation'],
          tags: [
            { languages: ['C#', 'C++'], stack: ['.NET 2.0', 'Microsoft Visual Studio .Net 2003', 'WinForms', 'ADO .NET', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        },
        { title: 'SmartMon', description: 'Software for diagnosis, measurement, display and registration of signals using Bluetooth-connection.',
          responsibilities: [
            'development of the application structure and algorithms',
            'code writing',
            'Measurement set (8-bit microcontroller ATMega 8515)',
            'Transmission set (Bluetooth master adapter, BlueGiga WTOR). Programming the serial profile via AT commands',
            'Display set (Smart phone/PDA/PC with support of Bluetooth).'
          ],
          tags: [
            { languages: ['C#', 'C'], stack: ['8-bit microcontroller ATMega 8515', 'Bluetooth', 'BlueGiga WTOR', 'Smartphone', 'PDC', 'PC', 'AT commands'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 6,
      title: 'C#.NET developer',
      type: 'office',
      dateFrom: '12.2006',
      dateTo: '03.2008',
      location: 'Saint-Petersburg',
      company: 'Kelman Ltd',
      website: 'http://www.kelman.co.uk/',
      projects: [
        { title: 'SMM', description: 'Application software for diagnostic and management the relay protection system.',
          responsibilities: [
            'development GUI module for digital filter'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 2.0', 'Microsoft Visual Studio .Net 2005', 'WinForms'] }
          ]
        },
        { title: 'TransConnect', description: 'Software for diagnostic, measurement of gas analysis hostboard through USB/TCP/Serial port interfaces.',
          responsibilities: [
            'development GUI and communication modules',
            'code writing in Visual Studio .NET 2005 (Framework 1.1/2.0)',
            'Subversion Wiki as version control system bug tacking',
            'refactoring code using GoF patterns',
            'debugging, maintenance'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 1.1', '.NET 2.0', 'Microsoft Visual Studio .Net 2005', 'SVN', 'Wiki', 'WinForms', 'NUnit', 'ADO.NET', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 7,
      title: 'Senior C#.NET developer',
      type: 'office',
      dateFrom: '04.2008',
      dateTo: '09.2009',
      location: 'Saint-Petersburg',
      company: 'Paladyne Systems',
      website: 'http://www.paladynesys.com/',
      projects: [
        { title: 'Analytics Master', description: 'Software for optimizing hedge fund activities.',
          responsibilities: [
            'development GUI and business logic (MSSQL 2005)',
            'code writing in Visual Studio .NET 2008 TFS (Framework 2.0/3.5)',
            'Refactoring, GoF design patterns',
            'Scrum'
          ],
          tags: [
            { languages: ['C#', 'SQL'], stack: ['.NET 2.0', '.NET 3.5', 'MSSQL 2005', 'Microsoft Visual Studio .Net 2008', 'TFS', 'WinForms', 'NUnit', 'Web service', 'Workflow foundation', 'ADO .NET', 'XML', 'Serialization', 'Reflection', 'Generics', 'Remoting'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 8,
      title: 'Senior C#.NET developer',
      type: 'office',
      dateFrom: '08.2010',
      dateTo: '05.2011',
      location: 'Saint-Petersburg',
      company: 'Blueprint (Sofea SPB)',
      website: 'http://www.blueprintsys.com/',
      projects: [
        { title: 'Raptor', description: 'It is a complete requirements solution for definition and collaboration. Enables authors to define requirements using rich text, UI mockups, use cases, business process, data, and roles. Uses rich simulation to visually communicate requirements to stakeholders in distributed or local organizations.',
          responsibilities: [
            'Working by SCRUM methology in the distributed team of 20 members',
            'Development of Presentation Layer (Graphic Core team)',
            'Code writing in Visual Studio .NET 2010 TFS (Framework 4.0), C#',
            'GoF design patterns'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 4.0', 'Silverlight', 'Visual Studio .NET 2008', 'Visual Studio .NET 2010', 'WCF RIA Services', 'NUnit', 'Entity framework', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 9,
      title: 'Cofounder/CEO',
      type: 'remote',
      dateFrom: '10.2009',
      dateTo: '11.2011',
      location: 'Saint-Petersburg',
      company: 'DSB',
      website: 'http://www.simactivator.ru/',
      projects: [
        { title: 'SIMActivator', description: 'Software for automation of business processes for regional telecommunication companies.',
          responsibilities: [
            'managing team as technical leader within 2 developers working by SCRUM methology',
            'development GUI and business logic (MySQL 5.x)',
            'code writing in Visual Studio .NET 2008 Professional (Framework 3.5), C#',
            'GoF design patterns'
          ],
          tags: [
            { languages: ['C#', 'SQL', 'Javascript', 'PHP', 'HTML' ], stack: ['.NET 3.5', 'MySQL 5', 'Scrum', 'AJAX', 'jQuery', 'WPF', 'WinForms', 'Windows services', 'Visual Studio .NET 2008', 'Visual Studio .NET 2010', 'NUnit', 'Linq', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 10,
      title: 'Senior .NET C#/Installation developer',
      type: 'remote',
      dateFrom: '01.2011',
      dateTo: '05.2012',
      location: 'Saint-Petersburg',
      company: 'Perfect Vision Soft',
      website: 'http://vk.com/id153862424/',
      projects: [
        { title: 'Perfect Vision Gallery', description: 'The tool helps non professionals to create video presentations easy and fast.',
          responsibilities: [
            'Create build box machine using VisualBuild Pro',
            'Developing of msi installation package using WiX Toolset 3.5',
            'Implement new features and fix bugs in desktop client application (C#, .NET 4.0, WPF)',
            'Create unit tests using NUnit integrated into Visual Studio 2010',
            'Version system control tool: TFS',
            'Distributed agile team'
          ],
          tags: [
            { languages: ['C#'], stack: ['.NET 4.0', 'WPF', 'Scrum', 'TFS', 'WiX Toolset 3.5', 'Visual Studio .NET 2010', 'Visual Build Pro', 'NUnit', 'Linq', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 11,
      title: 'Senior .NET C#/Visual Basic developer/Support engineer',
      type: 'remote',
      dateFrom: '05.2012',
      dateTo: '12.2013',
      location: 'Saint-Petersburg',
      company: 'Ultima Businessware',
      website: 'http://ultima.ru/',
      projects: [
        { title: 'Ultima ERP', description: '',
          responsibilities: '',
          tags: [
            { languages: ['C#', 'Visual Basic .NET'], stack: ['.NET 4.0', 'Scrum', 'SVN', 'Visual Studio .NET 2010', 'XML', 'Serialization', 'Reflection', 'Generics'] }
          ],
          screenshots: []
        }, {
          title: 'Supplier exchanage', description: '',
          responsibilities: '',
          tags: [
            { languages: ['PHP', 'C#', 'Javascript', 'HTML'], stack: ['.NET 4.0', 'YII 2.0', 'jQuery', 'Scrum', 'SVN', 'Visual Studio .NET 2010', 'XML'] }
          ],
          screenshots: []
        }
      ],
      references: ''
    }, {
      id: 12,
      title: 'Javascript frontend developer',
      type: 'remote',
      dateFrom: '12.2013',
      dateTo: '02.2014',
      location: 'Saint-Petersburg',
      company: '',
      website: 'http://akzia.com/',
      projects: [
        { title: 'Akzia payments', description: '',
          responsibilities: '',
          tags: [
            { languages: ['Javascript', 'CSS', 'HTML'], stack: ['AngularJS', 'Scrum', 'Git'] }
          ]
        }
      ],
      references: ''
    }, {
      id: 13,
      title: 'MCAD/MCSD',
      type: 'education',
      dateFrom: '09.2007',
      dateTo: '03.2008',
      location: 'Saint-Petersburg',
      company: 'Eureca',
      website: 'http://www.eureca.ru/',
      projects: []
    }, {
      id: 14,
      title: 'IELTS',
      type: 'education',
      dateFrom: '08.2009',
      dateTo: '08.2009',
      location: 'Moscow',
      company: 'BKC',
      website: 'http://www.bkc.ru/',
      projects: []
    }, {
      id: 15,
      title: 'MCPD Windows Developer 4',
      type: 'education',
      dateFrom: '11.2012',
      dateTo: '03.2013',
      location: 'Saint-Petersburg',
      company: 'Eureca',
      website: 'http://www.eureca.ru/',
      projects: []
    }
  ]
});
