app.factory('Api', function ($http) {
    return {

        getBookListByList: function (name,onSuccess) {
            /* * *
            獲得搜尋的書籍結果
            已完成
            * * */
            $http.post('http://127.0.0.1/search.php?Yourname=' + name).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        getBookDetail:function(bookId,onSuccess){
            /* * *
            獲得書籍詳細資料
            -------
            * * */
            $http.get('http://127.0.0.1/bookDetail.php?bookId=' +bookId).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        getAccountDetail:function(AccountId,onSuccess){
            /* * *
            獲得帳戶資料
            -------
            * * */
            $http.get('http://127.0.0.1/Account.php?AccountId=' +AccountId).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        uploadBook: function (bookName,ISBN,Category,Year,CopyCount,publisherName,authorName,onSuccess) {
            /* * *
            上架書籍
            已完成(尚未更新)
            * * */
            $http.get('http://127.0.0.1/upload.php?BookName=' +bookName+ '&ISBN='+ISBN+
            '&Category=' +Category+ '&Year='+Year+ '&CopyCount='+CopyCount+ '&publisherName=' +publisherName+
             '&authorName=' +authorName).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
                console.log(bookName);
                console.log(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },    
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        borrowBook:function(AccountId,bookId,onSuccess){
            /* * *
            借閱書籍
            ---------
            * * */
            $http.get('http://127.0.0.1/Borrow.php?AccountId=' +AccountId+
            '&bookId=' + bookId).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        getMyBorrow:function(AccountId,bookId,onSuccess){
            /* * *
            取得我的借閱歷史
            ---------
            * * */
            $http.get('http://127.0.0.1/myBorrow.php?AccountId=' +AccountId).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        getMyReservation:function(AccountId,bookId,onSuccess){
            /* * *
            取得我的預約歷史
            ---------
            * * */
            $http.get('http://127.0.0.1/MyReservation.php?AccountId=' +AccountId).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        uploadMyDetail:function(AccountId,onSuccess){
            /* * *
            取得我的預約歷史
            ---------
            * * */
            $http.get('http://127.0.0.1/uploadMyDetail.php?AccountId=' +AccountId).
            success(function (data, status, headers, config) {
                (onSuccess || angular.noop)(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error - Data:" + data + " status:" + status);
            });
        },
        sendAccount: function (name, address,sendername,senderemail,subject,Message, onSuccess) {
            //postExample
            $http.post(
                'http://127.0.0.1/library/AccountServer',
                { receiverName: name, receiverAddress: address, senderName: sendername, senderAddress: senderemail, subject: subject, message: Message },
                { 'Content-Type': 'text/html' }).
                success(function (data, status, headers, config) {
                    (onSuccess || angular.noop)(data);
                    //alert("ok");
                }).
                error(function (data, status, headers, config) {
                    alert("Error - Data404:" + data + " status:" + status);
                });
        }
    };
});