class OodsController < ApplicationController

    def index 
        options = {
            include: [:recipes]
        }
        render json: OodSerializer.new(Ood.all, options)
    end 

end
