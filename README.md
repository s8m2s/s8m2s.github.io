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

    Work | Photography | Blog  ||  Resume  ||  Contact

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
> 
> **Focus attention with lots of white space**
> 
> ![][whitespace]
> 
> **Show some Personality**
> 
> ![][personality]
> 
> **Use Icons**
> 
> ![][icons]
> 
> **Sticky navigation**
> 
> **sell it**
> 
> ![][sell] ![][sell2] ![][sell3]
> 
> **project description**
> 
> ![][project]
> 
> **simple contact CTA**
> 
> ![][cta]
> 
> **Resume**
> 
> ![][resume]

## Workflow

Develop a reusable process for building sites like this.
Decide on best tools such as sublime text, terminal, textastic, Codekit, mixture.io, etc.

Try to create a structured workflow or at-least guidelines for around the process. Brief > Sketches > Source order and content > Wire-framing > coded/prototype.

Look at using git for deployment, sass+compass, haml, jekyll...

## Server Instructions

### Stack

* apache
* rvm
* compass

### Useful commands

   $ nohup compass watch&




[resume]: https://www.evernote.com/shard/s1/sh/b845eb1f-09a7-4209-a3ea-724aef8da41b/39baf0c3093306b27ab3a35323ae127f/deep/0/Screenshot%203/18/13%202:12%20PM.jpg
[personality]: https://www.evernote.com/shard/s1/sh/58dc9f29-ea18-4fb7-bc7f-2677e55b3d39/0af5310349982e117a5e883a862e0b24/deep/0/Screenshot%203/18/13%201:46%20PM.jpg
[cta]: https://www.evernote.com/shard/s1/sh/bc5f98a8-d99b-4822-90e7-e3f1e4f6833e/6cdd8d6cd72ff9b3a5fd628d851355f6/deep/0/Screenshot%203/18/13%202:14%20PM.jpg
[sell2]: https://www.evernote.com/shard/s1/sh/28bf60b4-9e76-43b9-9b7a-5ffaee190c5b/fbd6cf9cfc01bdfe1329e52a66cd7095/deep/0/Screenshot%203/18/13%202:10%20PM.jpg
[whitespace]: https://www.evernote.com/shard/s1/sh/5b3afac4-26f1-4636-a964-f526da9954ad/9565efd176ad44644b74e868dd18f4f9/deep/0/Screenshot%203/18/13%201:22%20PM.jpg
[project]: https://www.evernote.com/shard/s1/sh/2dfd280d-c90c-416e-94e6-e8720860e03f/c65dc6ceb8a3208063487f587dee2cc2/deep/0/Screenshot%203/18/13%202:19%20PM.jpg
[icons]: https://www.evernote.com/shard/s1/sh/e95206fe-65d9-4160-9f07-277365256234/f9d2bcd5046e085545ed170447365f18/deep/0/Screenshot%203/18/13%201:50%20PM.jpg
[sell]: https://www.evernote.com/shard/s1/sh/b50278f0-5e00-4d4e-9b79-9c25c2ef02ae/bb5a27e8ace2e7edb9e6989c9b951ad0/deep/0/Screenshot%203/18/13%202:07%20PM.jpg
[sell3]: https://www.evernote.com/shard/s1/sh/c6c37ca0-bc3a-4914-b1e4-655af93aa079/db9fdef8b13ee4e89c73d7ef1b83a914/deep/0/Screenshot%203/18/13%202:18%20PM.jpg