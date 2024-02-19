import { openDB } from "idb";
import { TypeForm } from "../pages/home";

const dbPromise = openDB("myDatabase", 1, {
	upgrade(db) {
		if (!db.objectStoreNames.contains("dataStore")) {
			const store = db.createObjectStore("dataStore", {
				keyPath: "id",
				autoIncrement: true,
			});
			store.createIndex("name", "name", { unique: false });
			store.createIndex("email", "email", { unique: true });
		}
	},
});

export function useIndexedDB() {
	async function getAllData() {
		const db = await dbPromise;
		const tx = db.transaction("dataStore", "readonly");
		const store = tx.objectStore("dataStore");
		return store.getAll();
	}

	async function addData(data: TypeForm) {
		const db = await dbPromise;
		const tx = db.transaction("dataStore", "readwrite");
		const store = tx.objectStore("dataStore");
		const result = await store.add(data);
		await tx.done;
		return result;
	}

	return {
		getAllData,
		addData,
	};
}
