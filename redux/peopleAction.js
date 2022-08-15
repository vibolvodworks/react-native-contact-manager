export const SearchPeople = (people, searchTerm) => {
  people = searchTerm === '' ? people : people.filter((person) => {
    return person.name.toLowerCase().includes(searchTerm)
      || person.company.toLowerCase().includes(searchTerm)
      || person.position.toLowerCase().includes(searchTerm)
  });
  return people;
}
