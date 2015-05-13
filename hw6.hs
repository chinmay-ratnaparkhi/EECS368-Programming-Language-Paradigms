module Merger where

merge :: Ord a => [a] -> [a] -> [a]
merge = checkAndAdd
  where
    checkAndAdd as [] = as
    checkAndAdd [] bs = bs
    checkAndAdd (a:as) (b:bs)
      = case compare a b of
         GT -> b : checkAndAdd (a:as) bs
         _  -> a : checkAndAdd as (b:bs)