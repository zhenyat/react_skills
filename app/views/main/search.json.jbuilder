json.items do
  json.array!(@items) do |item|
    json.name item.name
    json.age item.age
  end
end

