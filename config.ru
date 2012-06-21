use Rack::Static,
  :urls => ["/stylesheets", "/images", "/calendar.html", "/contact_us", "/email_sign_up.html", "/location_and_hours", "/specials.html"],
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