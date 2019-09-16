<template>
  <div>
    <!-- 1 KB 未満のすべてのファイルは Base64 データ URL としてインライン化される -->
    <!-- 静的ファイルは基本asset配下でOK -->
    <img src="~/assets/images/test.png">
    <!-- ルートディレクトリ配下に起きたい場合はstatic配下に置く -->
    <img src="/assets/images/test.png">
  </div>
</template>

<script>
</script>
