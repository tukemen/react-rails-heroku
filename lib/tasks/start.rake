namespace :start do
    desc 'Start dev server'
    task :development do
        exec 'foreman start -f Procfile.dev'
    end

    desc 'Start dev server'
    task :production do
        exec 'NPM_CONFIG_PRODUCTION=true npm heroku-postbuild && foreman start'
    end
end

task :start => 'start:development'