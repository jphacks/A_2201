<template>
  <table class="table">
    <thead>
    <tr>
      <th><div style="width: 80px;"></div></th>
      <th><div style="width: auto;"></div></th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2">
          <img alt="animal" :src="require('@/assets/'+ bookmark.choice[0] + '-' + bookmark.choice[2] + '-' + bookmark.choice[1] +'.png')">
        </td>
      </tr>
      <tr>
        <th>URL</th>
        <td>
          <a
            :href="bookmark.url"
            target="_blank"
          >
            {{ bookmark.url=="" ? "なし" : bookmark.url }}
          </a>
        </td>
      </tr>
      <tr>
        <th>タイトル</th>
        <td>{{ bookmark.title=="" ? "なし" : bookmark.title }}</td>
      </tr>
      <tr>
        <th>検索ワード</th>
        <td>{{ bookmark.search_word=="" ? "なし" : bookmark.search_word }}</td>
      </tr>
      <tr>
        <th>説明</th>
        <td>{{ bookmark.summary=="" ? "なし" : bookmark.summary }}</td>
      </tr>
      <tr>
        <th>理由</th>
        <td>{{ bookmark.reason=="" ? "なし" : bookmark.reason}}</td>
      </tr>
      <tr>
        <th>タグ</th>
        <td>{{ bookmark.tag.length==0 ? "なし" : bookmark.tag }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "AddBookmark",
  props: ["bookmark"],
}
</script>

<style scoped>
img{
  width: 100px;
}
</style>