
# route helper with kroute()

```php
if (! function_exists('kroute')) {
    function kroute($service, $name, $parameters = [], $absolute = true)
    {
      $getService = (string) $service;
      $isDomain = Config::get('domain'. '.' . $getService . '.domain' );
      if(!$isDomain){
        $parseURI  = parse_url(route($name, $parameters, $absolute));
        $uri = str_replace(Config::get('domain'. '.' . $getService . '.slug' ).'.', "", $parseURI['host']);
        $route = $parseURI['scheme'].'://'.$uri.'/'.Config::get('domain'. '.' . $getService . '.slug' ).$parseURI['path'];
        return $route;
      }

      $route  = route($name, $parameters, $absolute);
      return $route;
    }
}
```

# priority

* domain always bottom within pair

```php
Route::prefix(Config::get('domain.money.slug'))->middleware('domain:money')->group($moneyroutes);
Route::group(['domain' => 'money-exchange.kamal.kamal','middleware'=>['domain:money,sub']], $moneyroutes);
```

```php
kroute('money','sell',['id'=>1]));
```
