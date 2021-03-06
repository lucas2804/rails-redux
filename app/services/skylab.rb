class Skylab
  # 1. /question1/answer :
  #   Implement bubble sort (highest to lowest and lowest to highest) in Ruby for array [9,1,8,2,7,3,6,4,5,10,13]

  def self.bubble_sort(arr)
    sorted_arr = arr
    for i in (0..sorted_arr.size - 2)
      for j in ((i + 1)..sorted_arr.size - 1)
        if sorted_arr[i].to_i > sorted_arr[j].to_i
          swap_position(sorted_arr, i, j)
        end
      end
    end

    sorted_arr
  end

  def self.reverse_array(arr)
    reverse_arr = []
    i = arr.size - 1
    while i >= 0
      reverse_arr << arr[i]
      i = i - 1
    end
    reverse_arr
  end

  #
  # 2. /question2/answer :
  #   Given 2 integer arrays, find the common elements between 2 arrays
  # array_1 = [3, 4, 6, 3, 7, 8, 5, 9]
  # array_2 = [5, 4, 1, 2, 3]

  def self.find_common_elements(array_1, array_2)
    i, j = 0, 0
    n1, n2 = array_1.size, array_2.size
    array_1 = bubble_sort(array_1)
    array_2 = bubble_sort(array_2)

    results = []
    while i < n1 and j < n2
      puts array_1[i], array_2[j]
      if array_1[i] == array_2[j]
        results << array_2[j]
        i = i + 1
        j = j + 1
      elsif array_1[i] < array_2[j]
        i = i + 1
      else
        j = j + 1
      end
    end

    results
  end

  # 3. /question3/answer :
  #  Find the first non-repeated character in a String “abcdabcdabcdabcdeabcdcba”
  #  string = 'abcdabcdabcdabcdeabcdcbae'
  #  find_first_non_repeated_char('abcdabcdabcdabcdeabcdcbae')
  def self.find_first_non_repeated_char(string)
    hash = count_group_by_char(string)
    string.chars.each_with_index do |char, index|
      if hash[char] == 1
        return { char: char, index: index, message: 'success' }
      end
    end

    { char: '', index: -1, message: 'can not find_first_non_repeated_char' }
  end

  # 4. /question4/answer :
  # Count the number of the character in a String after that Sort the character by the number from highest to lowest and lowest to highestEx:
  # Input: zyabcdabcac
  # Output 1: {a: 3, c: 3, b: 2, d: 1, y : 1, z: 1}
  # Output 2: {z: 1, y : 1, d: 1, b : 2, c: 3, a: 3}

  def self.sort_count_hash(string)
    hash = count_group_by_char(string) #  {"z"=>1, "y"=>1, "a"=>3, "b"=>2, "c"=>3, "d"=>1}
    hash_keys = hash.keys
    for i in (0..hash_keys.size - 2)
      for j in ((i + 1)..hash_keys.size - 1)
        if hash[hash_keys[i]] > hash[hash_keys[j]]
          swap_position(hash_keys, i, j)
        end
      end
    end

    hash_keys
    low_high_hash = {}
    hash_keys.each do |key|
      low_high_hash[key] = hash[key]
    end

    hash_keys = Skylab.reverse_array(hash_keys)
    high_low_hash = {}
    hash_keys.each do |key|
      high_low_hash[key] = hash[key]
    end

    [high_low_hash, low_high_hash]
  end


  private

  def self.swap_position(arr, i, j)
    temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  end

  def self.count_group_by_char(string)
    hash = {}
    string.chars.each do |char|
      if hash[char]
        hash[char] = hash[char] + 1
      else
        hash[char] = 1
      end
    end

    hash
  end
end
Skylab.sort_count_hash('zyabcdabcac')
