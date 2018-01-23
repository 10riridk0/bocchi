require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :index
end

get '/chat' do
    erb :chat
end

get '/end' do 
    erb :end
end