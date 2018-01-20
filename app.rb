require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :index
end

get '/chat' do
    erb :chat
end