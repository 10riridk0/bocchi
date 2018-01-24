require 'sinatra'
require 'sinatra/reloader'
require 'csv'

get '/' do
    erb :index
end

get '/chat' do
    @data = loadCSV
    erb :chat
end

get '/end' do 
    erb :end
end

# csv読み込む関数
def loadCSV
    csv = CSV.table("public/data.csv")
    linesCout = File.read("public/data.csv").count("\n")
    print csv[rand(linesCout)]
end

