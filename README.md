# scottstamile.com

## Project Plan

### Purpose of site

Present work and achievements  
Share ideas  
Socialize and network  
Be a link hub  
Show off

### Key Features

* Twitter field with live mentions display
* Tweet @scottstamile with #hashtag for post association
* Simple Blog Layout with interpretive post layout
* Comments for posts
* Easy social follow links

### Tech

* Static Site Generator for management
* Markdown for Content
* staging on Ubuntu Server LTS
* staging domain for home server
* script to setup project on server including vhost

####Project setup script
* shell script to create new project dir and vhost
* option for Dropbox or www
* option for compass
* option for git init
  * also sets up bare git repo
* arguments = name, git, compass, location, 

#### from mobile

* push files via ssh to home server
* Web script to start compass on project
* compass running on server per project
* pass server commands via file server watches file for commands

### Thoughts

Do I really need to feature my name?

Projects should be prominent. Maybe, a scrolling rotator across the top.

Blog makes up the content of the home page.

Do I need a "Home" button? What does it mean on a site like this?

What I really care about is connecting with people.

Twitter right up front

Who is most Likely to see my site?
What would offer the most value for them?

Potential clients
Potential employers
Bring people by offering content.


## Main Navigation

    Work | Photography | Blog ||  Contact

## Social Links

    Twitter | Github | Flickr | Dribbble | LinkedIn

## Basic Page Structure

* About *(visible on homepage, toggle on sub-pages)*

* Header
    * Nameplate
    * Main Navigation
    * Contact CTA

* *Page Content*

* Footer
    * contact form
    * social links
    * back to top link

## Pages

### Homepage Page

The homepage is the about page. My work/portfolio is not compelling enough to be the feature component of the site. 

The homepage should be the poster page, the 10 second Introduction that precedes my resume and portfolio.

### Resume Page

Laid out in HTML  
Print friendly layout  
Download PDF  

### Work Page


### Blog Page

[jekyll](http://jekyllrb.com) static cms

### Photography Page

link to flickr for now

## Design

> Nontraditional layout  
> Sticky navigation  
> Use Icons  
> Show some Personality  

## Workflow

Develop a reusable process for building sites like this.
Decide on best tools such as sublime text, terminal, textastic, Codekit, mixture.io, etc.

Try to create a structured workflow or at-least guidelines for around the process. Brief > Sketches > Source order and content > Wire-framing > coded/prototype.

Look at using git for deployment, sass+compass, haml, jekyll...