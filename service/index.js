import { getPeople, patchPeople } from "../redux/peopleSlice";

const FIREBASE_URL = 'https://contact-manager-bea8c-default-rtdb.firebaseio.com/';
export const FetchPeople = async (dispatch) => {
    try {
        const response = await fetch(FIREBASE_URL + 'people.json');
        let people = [];
        const peopleReponse = (await response.json());

        Object.entries(peopleReponse).forEach(([index, value]) => {
            people.push({ ...value, key: index });
        });
        console.log('testing');
        dispatch(getPeople(people));
    } catch (error) {
        console.error(error);
    }
}

export const UpdatePeople = async (people, key, updateData, dispatch) => {
    delete updateData.key;
    try {
        const response = await fetch(
            FIREBASE_URL + "people/" + key + ".json",
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData)
            }
        )
        const peopleReponse = (await response.json());
        let peopleUpdated = people.map((person) => {
            if (person.id === peopleReponse.id) {
                return { ...peopleReponse, key: key };
            }
            return person;
        });

        dispatch(patchPeople(peopleUpdated));
    } catch (error) {
        console.error(error);
    }
}

export const CreatePeople = async (userInput, dispatch) => {
    try {
        await fetch(
            FIREBASE_URL + "people.json",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInput)
            }
        )
    } catch (error) {
        console.error(error);
    }

    FetchPeople(dispatch);
}