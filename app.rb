require 'sinatra'
require 'sinatra/reloader'
require 'csv'

get '/' do
    erb :index
end

get '/chat' do
    @data = loadCSV
    @send_message =  params[:message]
    erb :chat
end

get '/end' do 
    erb :end
end

# csv読み込む関数
def loadCSV
    csv = CSV.table("public/data/data.csv")
    linesCout = File.read("public/data/data.csv").count("\n")
    word =  csv[rand(linesCout)]
end

