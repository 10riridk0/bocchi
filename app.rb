require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'csv'

ActiveRecord::Base.establish_connection(
  "adapter" => "sqlite3",
  "database" => "./db/bbs.db"
)

after do
  ActiveRecord::Base.connection.close
end

class Comment < ActiveRecord::Base
end

get '/' do
    erb :index
end

get '/chat' do
    @comments = Comment.order('id asc')
    @reply = method(:loadCSV)
    erb :chat
end

post '/chat/comment' do
    Comment.create({
      body: params[:body]
    })
  end

get '/chat/comments/last' do
    comment = Comment.last
    reply = loadCSV
    {comment_body: comment.body,
     reply_body: reply
    }.to_json
end

get '/end' do
    erb :end
end

# csv読み込む関数
def loadCSV
    csv = CSV.table("public/data/data.csv")
    linesCout = File.read("public/data/data.csv").count("\n")
    word = csv[rand(linesCout)][0]
end

