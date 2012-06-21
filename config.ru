[code lang="ruby"]
gem 'rack-rewrite', '~> 1.0.0'
require 'rubygems'
require 'rack'
require 'rack/rewrite'
require 'thin'

use Rack::Static,
  :urls => ["/stylesheets", "/images", "/calendar.html"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  =>  'text/html',
      'Cache-Control' =>  'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
    ]
}

use Rack::Rewrite do
rewrite '/', '/index.html'
end