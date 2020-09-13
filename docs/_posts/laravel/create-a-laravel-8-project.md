---
category: Laravel
title: Create a rest api by laravel 8
layout: Article
image: https://lh3.googleusercontent.com/DAeLGsE71e2dNbcIr51s4ZGr-Z_CnrhW-wa50u8H2vO_jJ6zYovMU-RIR7bgKYz4Q3ru_L5qmp6rHfThDj9mktyZvGwTM6i3LA5dAg=w760-h360
---


## Init Project

``` javascript{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Create database vma and update env


## Add some awesome package 

- tymon/jwt-auth (JWT authenticate)
- spatie/laravel-permission (ACL/Access control)
- spatie/laravel-query-builder( Build generic api query)
- spatie/laravel-valuestore (for general setting)

``` bash
composer require tymon/jwt-auth
composer require spatie/laravel-permission
composer require spatie/laravel-query-builder
composer require spatie/laravel-valuestore

```

## configure package

```bash
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan vendor:publish --provider="Spatie\QueryBuilder\QueryBuilderServiceProvider"


```
