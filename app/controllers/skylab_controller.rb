class SkylabController < ApplicationController
  def question1_answer

  end

  def bubble_sort
    result = Skylab.bubble_sort(input_arr)
    redirect_to '/question1/answer', notice: "Sorted array is: #{result}"
  end

  def bubble_sort_reverse
    sorted_asc = Skylab.bubble_sort(input_arr01)
    result = Skylab.reverse_array(sorted_asc)
    redirect_to '/question1/answer', notice: "Sorted array is: #{result}"
  end

  def find_common_elements
    result = Skylab.find_common_elements(input_arr01, input_arr02)
    redirect_to '/question2/answer', notice: "The common elements are: [#{result}]"
  end

  def find_first_non_repeated_char
    position = Skylab.find_first_non_repeated_char(input_params[:input_string01])
    redirect_to '/question3/answer', notice: "The first non repeated char at position: #{position}"
  end

  def sort_count_hash
    outputs = Skylab.sort_count_hash(input_params[:input_string01])
    redirect_to '/question4/answer', notice: "Outputs: #{outputs}"
  end

  private

  def input_arr01
    @input_arr01 ||= input_params[:input_string01].split(',')
  end

  def input_arr02
    @input_arr02 ||= input_params[:input_string02].split(',')
  end

  def input_params
    params.require(:inputs).permit(:input_string01, :input_string02)
  end
end
