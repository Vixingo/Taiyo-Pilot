<template>
    <div>
        <br /><br /><br />

        <input type="checkbox" key="" value="Hello" id="1" />
        <label for="1">add</label>
        <!-- <ul v-for="i in filterlist" :key="i.id">
            <li>{{ i }}</li>
        </ul>
        <br />
        <ul v-for="b in b_list" :key="b.id">
            <li>
                <input type="checkbox" @click="toggle(b)" name="color" />
                {{ b }}
            </li>
        </ul>
<ul>
            <h1>{{ filterlist }}</h1>

            <input type="checkbox" @click="toggle" name="color" />
            <li v-for="user in users" :key="user.id">
                <p v-for="value in user.metadata.attributes" :key="value.id">
                    {{ value.trait_type }}
                </p>
            </li>
        </ul> -->
    </div>
</template>

<script>
import { testjson } from "../assets/test.js";
export default {
    name: "VixKill",
    data() {
        return {
            users: testjson,
            b_list: [],
            filterlist: ["as"],
            ok: false,
        };
    },

    methods: {
        toggle(e) {
            if (this.filterlist.includes(e)) {
                this.filterlist.pop(e);
            } else {
                this.filterlist.push(e);
            }

            this.ok = !this.ok;
            if (this.ok) {
                this.filterlist.push("ko");
            } else {
                this.filterlist.pop("Me");
            }
            this.listMaker();
        },

        listMaker() {
            this.users.forEach((element) => {
                element.metadata.attributes.forEach((v) => {
                    if (
                        v.trait_type === "Background" &&
                        !this.b_list.includes(v.value)
                    ) {
                        this.b_list.push(v.value);
                    }
                });
            });
        },
    },
};
</script>
