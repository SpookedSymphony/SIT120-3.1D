<style scoped>
.svg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>

<template>
    <div class="svg">
        <a href="/">
        <svg height="130" width="200">
            <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:teal;stop-opacity:1" />
                <stop offset="100%" style="stop-color:whitesmoke;stop-opacity:1" />
            </linearGradient>
            </defs>
            <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
            <text fill="slate" font-size="45" font-family="Verdana" x="60" y="86">BIU</text>
        </svg>
        </a>
    </div>
</template>