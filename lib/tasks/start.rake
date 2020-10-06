namespace :start do
    desc 'Start dev server'
    task :development do
        exec 'foreman start -f Procfile.dev'
    end

    desc 'Start production server'
    task :production do
        exec 'yarn heroku-postbuild && foreman start'
    end
end

task :start => 'start:development'