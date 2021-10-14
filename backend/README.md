# Golden shoe backend
This is the golden shoe backend using Django Rest Framework

## Getting Started

Setup project environment with [virtualenv](https://virtualenv.pypa.io) and [pip](https://pip.pypa.io) and activate it as follows.
```bash
$ virtualenv golden-shoe-backend-env
$ golden-shoe-backend-env\Scripts\activate 
```
See more: https://www.django-rest-framework.org/tutorial/quickstart/#project-setup

Install dependecies
```bash
$ pip install -r requirements.txt
```
Run database migrations and start your development server
```bash
$ cd golden_shoe
$ python manage.py migrate
$ python manage.py runserver
```

Run test
```bash
$ python manage.py test

```
Create new superuser
superuser 
- user - admin
- email - admin@goldenshoe.com
- password - password123
