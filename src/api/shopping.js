const router = require('express').Router();
const { callApi } = require('@/lib/common-api');

router.post('/categories', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/categories', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/device', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/device', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/gender', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/gender', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/age', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/age', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/keywords', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/keywords', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/keyword/device', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/keyword/device', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/keyword/gender', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/keyword/gender', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

router.post('/category/keyword/age', async (req, res) => {
  const params = req.getParams();
  try {
    const result = await callApi('shopping/category/keyword/age', params, 'post');
    return res.success(result);
  } catch (error) {
    console.log(error);
    return res.fail();
  }
});

module.exports = router;