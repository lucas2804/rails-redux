class Skylab
  # 1. /question1/answer :
  #   Implement bubble sort (highest to lowest and lowest to highest) in Ruby for array [9,1,8,2,7,3,6,4,5,10,13]

  def self.bubble_sort(arr)
    sorted_arr = arr
    for i in (0..sorted_arr.size - 2)
      for j in((i+1)..sorted_arr.size - 1)
        swap_position(sorted_arr, i, j)
      end
    end

    sorted_arr
  end

  def self.reverse_bubble_sort(arr)
    arr = bubble_sort(arr)
    reverse_arr = []
    i = arr.size - 1
    while i >= 0
      reverse_arr << arr[i]
      i = i - 1
    end
    reverse_arr
  end


  private

  def self.swap_position(arr, i, j)
    if arr[i] > arr[j]
      temp = arr[j]
      arr[j] = arr[i]
      arr[i] = temp
    end
  end
end
