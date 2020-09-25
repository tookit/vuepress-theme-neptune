---
category: Laravel
title: Laravel 8 Rest API - Implement a simple jwt token  authentication
layout: Article
lang: en-US
date: "2020-09-22"
tags:
- Laravel
- REST
- TDD
---


# Authentication

Base my personal experience, I prefer test driven development by laravel. Before we started diving into codeing, I need to prepare two things

- Configure phpunit test
- prepare the data schema

## Login Test

```bash
    php artisan make:test LoginTest
```

## TDD

Let us start with test driving development

``` php

<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * Test login to get access token.
     *
     * @return void
     */
    public function testLogin()
    {
        // create a user instance
        $user = factory(\App\Models\User::class)->create(['password' => 'secret', 'username' => 'tookit','email'=>'wangqiangshen@gmail.com','flag' => 1]);
        $resp = $this->post('/api/auth/login', [
            'email' => $user->email,
            'password' => 'secret'
        ]);
        $resp->assertStatus(200);
        $resp->assertJsonStructure([
            'access_token',
            'expires_in'
        ]);
    }
}

```

## Related code

We need create a `User` model, and define the factory method so we can generate the test data we need, at last we also need to define
the api end point `/api/auth/login`

- The User Model/Migration
- The User Model factory definition
- The API end point `/api/auth/login`


## tymon/jwt-auth

In this case, I will use [tymon/jwt-auth](https://jwt-auth.readthedocs.io/en/develop/quick-start) to implement a basic token based authentication

More details [https://jwt-auth.readthedocs.io/en/develop/quick-start/](https://jwt-auth.readthedocs.io/en/develop/quick-start/)

implement `Tymon\JWTAuth\Contracts\JWTSubject`


## step 1. run migration 

run migration  to create the database schema we need

```bash
php artisan migrate

```

## step 2. make seeder 

make seeder to generate the sample data we need

```bash
php artisan make:seeder UserSeeder

php artisan db:seed --class=UserSeeder

