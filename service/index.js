import { getPeople } from "../redux/peopleSlice";

export const FetchPeople = async (dispatch) => {
    try {
        const response = await fetch('https://contact-manager-bea8c-default-rtdb.firebaseio.com/people.json');
        let people = [];
        const peopleReponse = (await response.json());

        Object.entries(peopleReponse).forEach(([index, value]) => {
            people.push({ ...value, key: index });
        });
        dispatch(getPeople(people));
    } catch (error) {
        console.error(error);
    }

}