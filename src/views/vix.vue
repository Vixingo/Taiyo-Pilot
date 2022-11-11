<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user.id">
                <p v-for="value in user.metadata.attributes" :key="value.id">
                    {{ value }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import data from "../assets/Stoned_Ape_Crew.json";
export default {
    name: "VixKill",
    data() {
        return {
            users: data,
        };
    },
};
</script>
