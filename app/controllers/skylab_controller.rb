class SkylabController < ApplicationController
  def question1_answer

  end

  def bubble_sort
    result = Skylab.bubble_sort(input_arr)
    redirect_to '/question1/answer', notice: "Sorted array is: [#{result.join(',')}]"
  end

  def bubble_sort_reverse
    sorted_asc = Skylab.bubble_sort(input_arr)
    sorted_desc = Skylab.reverse_array(sorted_asc)
    redirect_to '/question1/answer', notice: "Sorted array is: [#{sorted_desc.join(',')}]"
  end

  private

  def input_arr
    input_arr = input_params[:input_string].split(',')
  end

  def input_params
    params.require(:inputs).permit(:input_string)
  end
end
