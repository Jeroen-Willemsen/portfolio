import {DevelopmentExperienceCategory} from '../models/development-experience.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentExperienceService {
  developmentExperienceCategories: DevelopmentExperienceCategory[] = [
    {
      name: 'Front-end development',
      info: 'Creating CRUD apps in Angular using Angular Material',
      experiences: [
        {
          name: 'Angular',
          info: ['My primary front-end development experience is with the Angular framework.',
            'I am well-versed in Angular as a whole, and I am very familiar with the Material component library.',
            'I have built many CRUD-functionalities using components such as mat-table, mat-tree, and many others.']
        },
        {
          name: 'D3.js',
          info: ['I have used D3.js for the creation of charts and graphs as well as the visualisation of ' +
          'geographical areas and their properties, using live data from either relational or time series databases.']
        },
        {
          name: 'DevExtreme',
          info: ['I have used DevExtreme components, chief among which data grids, to build CRUD-functionalities that ' +
          'needed more complex and elaborate filter functions than any native Angular/TS alternatives.']
        },
        {
          name: 'Other',
          info: ['Other front-end development experiences include maintaining legacy AngularJS, and creating static ' +
          'web pages using bare HTML and CSS.']
        },
      ]
    },
    {
      name: 'Back-end development',
      info: '',
      experiences: [
        {
          name: 'REST APIs',
          info: ['I have worked on many REST APIs or parts thereof, ' +
          'usually as part of some Angular application, where the majority of my work would be centered around ' +
          'writing get-by-filter methods to accommodate the visualisation of database entities on the front-end, ' +
          'as well as furnishing other CRUD-methods.']
        },
        {
          name: 'Web services',
          info: ['I have written a few web services as part of a larger application, such as to check for the presence ' +
          'of a certain file in a folder structure in order for the front-end to generate a download button or not.']
        },
        {
          name: 'Windows services',
          info: ['I have written and contributed to various Windows services, such as ' +
          'developing a periodic PI-value updater to update PI values every 5 minutes, ' +
          'and aggregating millions of PLC messages into usable database entries.']
        },
        {
          name: 'Other',
          info: ['I have on occasion maintained APIs written in either Java or Pascal.']
        },
      ]
    },
    {
      name: 'Databases',
      info: '',
      experiences: [
        {
          name: 'SQL',
          info: ['I have managed, maintained and expanded SQL databases extensively. ',
            'Maintenance experience includes writing scripts to detect faulty data, reorganising/rebuilding indexes, ' +
            'and using schema compares to ensure different environments are aligned in terms of their data model. ',
            'I have also written many stored procedures, either to facilitate the generation of SSRS reports, or to ' +
            'fetch large data sets for a web application more effectively than an ORM would. ',
            'I am very familiar with the SQL Server Management Studio environment as as a whole.']
        },
        {
          name: 'Oracle',
          info: ['I have managed and maintained various legacy Oracle databases using Toad for Oracle.']
        },
        {
          name: 'PI',
          info: ['I have built and maintained various parts of PI database systems using tools such as ' +
          'PI ProcessBook, PI System Explorer, PI AF and PI Builder.']
        },
        {
          name: 'Other',
          info: ['I have built and maintained numerous SSRS reports. ',
            'Much of my experience comes from a large project where a set of legacy reports tied to Oracle databases ' +
            'had to be rewritten using SQL data.']
        },
      ]
    },
    {
      name: 'Projects I\'ve been involved in',
      info: '',
      experiences: [
        {
          name: 'Reverse engineering an old Pascal app',
          info: ['The largest I\'ve been involved in. It was a multi-year project with the goal of replacing an old ' +
          'Pascal application written between the late 80\'s and early 90\'s with a modern web application. ',
            'The app was a very elaborate and complex MES (Manufacturing Execution System) that used global sections ' +
            'instead of a relational database, and which was able to communicate with other applications via OPC. ',
            'I was tasked with reverse engineering various components of this application, which involved things ' +
            'such as devising a new data model, setting up communication with other applications, writing logic to ' +
            'process messages received from other applications, and rewriting the entire user interface.']
        },
        {
          name: 'Reverse engineering an outdated database',
          info: ['Related to the above project was a smaller project where some Oracle databases that were set up in ' +
          'the late 90\'s to facilitate reports had become outdated with the replacement of the old MES application, ' +
          'and which had to be replaced using a similar, but not identical data model. ',
            'I was tasked with creating the data model, writing back-end logic to periodically update the tables in ' +
            'question, writing views and stored procedures to facilitate report-building, ' +
            'and deploying the eventual reports to users.']
        },
        {
          name: 'Building an entire CRUD application',
          info: ['I was tasked with building an entire CRUD application that was used company-wide to view, create, ' +
          'edit and remove chemical compounds as used within the company. ',
            'This project involved several interesting challenges, such as setting up a mailing list functionality, ' +
            'writing a very complex input form for creating and editing compounds and their properties that involved ' +
            'several layers of user roles and rights, and implementing a large DevExtreme data grid to facilitate ' +
            'complex filtering on the user end.']
        },
        {
          name: 'Writing a service to communicate PI-values',
          info: ['I was tasked with writing a Windows Service that periodically aggregated various pieces of data, ' +
          'performed a number of calculations and other operations, and updated a set of some 200 PI-tag values ' +
          'based on the output. ',
            'This also involved configuring the database using tools such as ' +
            'PI ProcessBook, PI System Explorer, PI AF and PI Builder.']
        },
      ]
    },
    {
      name: 'Courses and certifications',
      info: '',
      experiences: [
        {
          name: 'Programming',
          info: [`My most recent certification is for a week-long course in Angular 16 by Capgemini taken in 2023. ` +
          `You can download the certificate <a href=\"assets/certifications/AngularV16_Capgemini.pdf\" download>here</a>.`,
            'I also took and passed a course in Java Fundamentals in 2022 to learn about object-oriented programming.']
        },
        {
          name: 'Databases',
          info: [`I took and passed EXIN's DBSQL (Databases and SQL Foundation) course in 2022. ` +
          `You can download the certificate <a href=\"assets/certifications/DBSQL_EXIN.pdf\" download>here</a>.`]
        },
        {
          name: 'Project management',
          info: [`I took and passed the Azure AZ-900 (Azure Fundamentals) course from Pearson VUE in 2022. ` +
          `You can download the certificate <a href=\"assets/certifications/Azure_AZ-900_Microsoft.pdf\" download>here</a>.`,
            `I am also a certified scrum master, having taken and passed the PSM-I (Professional Scrum Master I) course ` +
            `by scrum.org in 2022. ` +
            `You can download the certificate <a href=\"assets/certifications/PSM_scrumdotorg.pdf\" download>here</a>.`]
        },
        {
          name: 'Other',
          info: [`I took and passed an elaborate course on machine learning with Python. ` +
          `This was a PhD course called 'Social Sciences: An Applied Introduction to Machine Learning' ` +
          `and was provided by the University of Aalborg, Denmark in 2019. ` +
          `You can download the certificate <a href=\"assets/certifications/SDSPHD20_AAU.pdf\" download>here</a>.`]
        },
      ]
    },
    {
      name: 'Tooling I\'ve worked with',
      info: '',
      experiences: [
        {
          name: 'Writing code',
          info: ['For front-end development, nothing beats JetBrains IDEs in my experience; this website was made ' +
          'using the Webstorm community edition, and I\'ve used the commercial version professionally for years.',
            'For back-end development, I prefer Visual Studio; most of the projects I\'ve worked on were written in ' +
            '.NET Framework, and I\'ve relied on many Visual Studio/Microsoft-specific extensions, e.g. for building ' +
            'SSRS and reports and for SQL data and schema comparisons.',
            'I also have some experience with other IDEs and editors, such as Eclipse for Java, and VSCode for things ' +
            'such as Python scripts.',
            'Lastly, although I hardly every do any actual programming in it, I\'m an avid user of Notepad++ and its ' +
            'many extensions, which I use for things such as analysing JSON or XML, formatting database queries, and ' +
            'searching through or editing files in bulk.']
        },
        {
          name: 'Managing databases',
          info: ['For SQL, I mainly use the SQL Server Management Studio environment, which I am very familiar with.',
            'I have also used JetBrains\' DataGrip and the open-source DBeaver, albeit mainly for queries.',
            'For Oracle, I have primarily used Toad for Oracle; it comes at a steep cost, but it is incredibly powerful.',
            'For PI, I have used PI ProcessBook, PI System Explorer, PI AF and PI Builder.']
        },
        {
          name: 'Version control and project management',
          info: ['For version control I always use Git, and I prefer to have some kind of graphical interface. ' +
          'The tool I like best is SourceTree, although I have on occasion used TortoiseGit where SourceTree fell ' +
          'short to accomplish what I needed to do.',
            'For project management, including things like CI/CD, I am quite familiar with Azure DevOps; I have used ' +
            'many of its functionalities extensively, such as Azure Boards for Agile project management, Azure Repos to' +
            'manage branches and pull requests, Azure Pipelines for managing builds and deployment, etc. ' +
            'For personal projects, such as this website, I use GitHub.']
        },
        {
          name: 'Other',
          info: ['Other tools I\'ve used for development purposes include statistical tools such as NCSS and SPSS, ' +
          'cartographic software such as QGIS, and Overleaf for LaTeX.']
        },
      ]
    },
  ];

  getExperienceCategories(): Observable<DevelopmentExperienceCategory[]> {
    return of(this.developmentExperienceCategories);
  }
}
