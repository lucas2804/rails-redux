require './linked_list'

RSpec.describe LinkedList do
  describe "#new" do
    context "with no arguments" do
      list = LinkedList.new()

      it "creates an empty list" do
        expect(list.size).to eq(0)
      end
    end

    context "with some arguments" do
      list = LinkedList.new([1, 2, 3, 4])

      it "creates a pre-populated list" do
        expect(list.size).to eq(4)
        expect(list.contains_all? [1, 2, 3, 4]).to be true
      end
    end
  end

  describe "#insert" do
    context "on an empty list" do
      list = LinkedList.new()
      list.insert(1)

      it "should contain the inserted item" do
        expect(list.size).to eq(1)
        expect(list.contains? 1).to be true
      end
    end

    context "on an emptied list" do
      list = LinkedList.new()
      list.insert(1)
      list.remove_last()

      list.insert(1)

      it "should contain the inserted item" do
        expect(list.size).to eq(1)
        expect(list.contains? 1).to be true
      end
    end
  end

  describe "#insert_collection" do
    list = LinkedList.new()
    items = [1, 2, 3, 4]

    list.insert_collection(items)

    it "should contain all inserted items" do
      expect(list.size).to eq(items.length)
      expect(list.contains_all? items).to be true
    end
  end

  describe "#remove_items_matching" do
    list = LinkedList.new([1, 2, 3, 4])

    it "should remove all matching items" do
      list.remove_if { |item| item % 2 == 1 }

      expect(list.size).to eq(2)
      expect(list.contains_all? [2, 4]).to be true
      expect(list.contains? 1).to be false
      expect(list.contains? 3).to be false
    end
  end

  describe "#remove_last" do
    context "when list is empty" do
      list = LinkedList.new()

      list.remove_last()
      it "should allow subsequent operations to work well" do
        expect(list.size).to be 0
        expect(list.contains? 0).to be false
      end
    end

    context "when list contains several items" do
      items = [1, 2, 3, 4]
      list = LinkedList.new(items)

      it "should keep invariants after each operation" do
        items.reverse.each_with_index do |item, i|

          expect(list.contains? item).to be true

          list.remove_last()

          expect(list.size).to be (items.length - 1 - i)
          expect(list.contains? item).to be false
        end
      end
    end
  end
end
