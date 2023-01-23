<?php

namespace App\Http\Middleware;

use App\Helpers\AuthHelper;
use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

class AccessMiddleWare
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (AuthHelper::userHasAccess($request)) {
            return $next($request);
        }

        throw new AuthenticationException();
    }
}
