<template>
    <nav class="flex flex-row mx-auto lg:mx-0 text-gray-400">
        <g-link
            class="px-2 py-1 uppercase text-xs font-semibold hover:text-gray-200"
            :to="nav.link"
            exact-active-class="text-gray-100"
            v-for="(nav, i) in $static.metadata.mainNavigation"
            :key="i"
            >{{ nav.name }}</g-link
        >
    </nav>
</template>

<static-query>
query {
    metadata {
        mainNavigation {
            name
            link
        }
    }
}
</static-query>