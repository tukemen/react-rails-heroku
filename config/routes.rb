Rails.application.routes.draw do
  get "hello", to: 'application#hello'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
