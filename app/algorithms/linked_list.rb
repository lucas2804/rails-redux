class LinkedList
  attr_accessor :head, :tail, :size

  def initialize(items = [])
    @size = 0
    append_nodes(items)
  end

  def append_nodes(items)
    items.each { |item| append_node(item) }
  end

  def append_node(item)
    if @head.item.nil?
      @head.item
    end

    tail_node = Node.new(item: item, _next: @tail)
    @tail.next = tail_node
    @tail = tail_node
    @size = @size + 1
  end

  def find(value)
    node = @head
    binding.pry
    return if node.tail?
    return node if node.item == value
    until node.tail?
      node = node.next
      return node if node.item == value
    end

    false
  end

  # def delete(value)
  #   delete_head if @head.value == value
  # end

  class Node
    def initialize(item: nil, _next: nil)
      @item = item
      @next = _next
    end

    def tail?
      @next.nil?
    end

    attr_accessor :item, :next
  end

end
